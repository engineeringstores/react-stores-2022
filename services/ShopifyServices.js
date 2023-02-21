const adapters = require("@shopify/shopify-api/adapters/node");
const { shopifyApi } = require("@shopify/shopify-api");

const ShopifyServices = {
  async getAccess() {
    const shopify = shopifyApi({
      apiKey: process.env.SHOPIFY_API_KEY,
      apiSecretKey: process.env.SHOPIFY_API_SECRET_KEY,
      scopes: [
        "unauthenticated_read_content",
        "unauthenticated_read_product_listings",
        "unauthenticated_read_product_inventory",
        "unauthenticated_read_product_tags",
        "unauthenticated_read_product_pickup_locations",
        "unauthenticated_read_selling_plans",
      ],
      hostName: "ngrok-tunnel-address",
    });

    const storefrontClient = new shopify.clients.Storefront({
      domain: process.env.SHOPIFY_URL,
      storefrontAccessToken: process.env.SHOPIFY_STORFRONT_API_KEY,
    });

    return storefrontClient;
  },

  async getAllProducts() {
    const client = await this.getAccess();
    const response = await client.query({
      data: `{
        products (first: 250) {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          nodes {
            featuredImage {
              url
            }
            title
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }`,
    });
    const products = response.body.data.products.nodes.map((node) => {
      return {
        title: node.title,
        imageURL: node.featuredImage?.url,
        price: node.priceRange.minVariantPrice.amount,
      };
    });
    return products;
  },

  async getProductInfo(prodID) {
    const client = await this.getAccess();
    const response = await client.query({
      data: `{
        product(id: "gid://shopify/Product/${prodID}") {
          id
          title
          totalInventory
          images(first: 250) {
            nodes {
              id
              width
              height
              url
            } 
          }
          productType
          tags
          variants(first: 250) {
            nodes {
              id
              title
              quantityAvailable
              price {
                amount
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
        }
      }`,
    });
    const product = response.body.data.product;
    return product;
  },

  async getCollections() {
    const client = await this.getAccess();
    const response = await client.query({
      data: `{
        collections(first: 250) {
          nodes {
            id
            title
            image {
              src
            }
            description
          }
        }
      }`,
    });

    const collections = response.body.data.collections.nodes;

    return collections;
  },

  async getCollectionProducts(collectionID) {
    const client = await this.getAccess();
    const response = await client.query({
      data: `{
        collection(id: "gid://shopify/Collection/${collectionID}") {
          products(first: 250) {
            nodes {
              id
              title
              featuredImage {
                src
              }
              priceRange {
                maxVariantPrice {
                  amount
                }
                minVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }`,
    });
    const products = response.body.data.collection.products.nodes;
    return products;
  },
};

module.exports = ShopifyServices;
