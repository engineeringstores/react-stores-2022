// import Client from 'shopify-buy';
import { useEffect } from 'react';
import ShopifyBuy from '@shopify/buy-button-js';

const BuyButton = () => {
  const shopifyClient = ShopifyBuy.buildClient({
    domain: 'u-of-t-engineering-stores.myshopify.com',
    storefrontAccessToken: 'a637453c4cbc63c8ae6c74dd69c9366b', // previously apiKey, now deprecated
  });

  const ui = ShopifyBuy.UI.init(shopifyClient);
  const buyButtonOptions = {
    product: {
      iframe: true,
      contents: {
        img: true,
      },
      text: {
        button: 'ADD TO CART',
        outOfStock: 'Out of stock',
        unavailable: 'Unavailable',
        unitPriceAccessibilityLabel: 'Unit price',
        unitPriceAccessibilitySeparator: 'per',
        regularPriceAccessibilityLabel: 'Regular price',
        salePriceAccessibilityLabel: 'Sale price',
      },
    },
    cart: {
      startOpen: true,
    },
    modal: {}, // configure the modal created by a product embed
    productSet: {}, // configure a collection or set of products
    toggle: {}, // configure the tab that toggles the cart open
    modalProduct: {}, // configure the product within the modal
    option: {}, // configure the variant option selectors within a product
    lineItem: {}, // configure the individual line items within a cart
  };
  useEffect(() => {
    ui.createComponent('product', {
      id: '6716470722769',
      node: document.getElementById('6716470722769'),
      options: buyButtonOptions,
    });
    //     ui.createComponent('product', {
    //       id: 'gid://shopify/Product/6716470722769',
    //       node: document.getElementById('6716470722769'),
    //       options: {
    //         product: {
    //           buttonDestination: 'modal',
    //         },
    //         cart: {
    //           startOpen: false,
    //         },
    //       },
    //     });
  });
  return <div id={'6716470722769'} />;
};

export { BuyButton };
