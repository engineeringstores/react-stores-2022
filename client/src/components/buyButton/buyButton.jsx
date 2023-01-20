// import Client from 'shopify-buy';
import { useEffect } from 'react';
import ShopifyBuy from '@shopify/buy-button-js';

import PropTypes from 'prop-types';

const BuyButton = ({ productID }) => {
  const shopifyClient = ShopifyBuy.buildClient({
    domain: import.meta.env.VITE_APP_SHOPIFY_URL,
    storefrontAccessToken: import.meta.env.VITE_APP_SHOPIFY_STORFRONT_API_KEY,
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

  const loadProduct = () => {
    ui.createComponent('product', {
      id: productID,
      node: document.getElementById('product-buy-button'),
      options: buyButtonOptions,
    });
  };

  useEffect(() => {
    console.log(productID);
    ui.createComponent('product', {
      id: productID,
      node: document.getElementById('product-buy-button'),
      options: buyButtonOptions,
    });
  });

  return (
    <div
      id={'product-buy-button'}
      onLoad={() => {
        loadProduct();
      }}
    />
  );
};

BuyButton.propTypes = {
  productID: PropTypes.string,
};

export { BuyButton };
