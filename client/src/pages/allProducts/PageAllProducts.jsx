import { useState } from 'react';
import './PageAllProducts.scss';

import ArrowRight from '../../assets/icons/right-arrow.svg';

import { ItemDisplay } from '../../components/itemDisplay/itemDisplay';

const PageAllProducts = () => {
  const productsList = [
    {
      title: 'UofMeg x Stores "Utility Green"',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/Utility_Green_UofMeg_161df0fd-538e-4369-b29c-eca0b7d8b336.jpg?v=1629064903',
      price: '25.0',
    },
    {
      title: 'SkuleTM Retro Windbreaker',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/IMG_1323.png?v=1630794083',
      price: '55.0',
    },
    {
      title: 'UofMeg x Stores Tie-Dye T-Shirt Red',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/IMG_1529.png?v=1630806462',
      price: '25.0',
    },
    {
      title: 'UofMeg x Stores "Purple Dye Explosion"',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/Megan_Purple_2_921362b9-2d5c-47ad-8aaa-428e46c815a8.jpg?v=1629064898',
      price: '25.0',
    },
    {
      title: 'Skule Shirt (Purple)',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/Skule_Shirt_Purple_S.jpg?v=1631501249',
      price: '13.27',
    },
    {
      title: 'Skule Shirt (Navy Blue)',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/Skule_Shirt_NavyBlue_S_1.jpg?v=1631502726',
      price: '13.27',
    },
    {
      title: 'Skule Shirt (Grey)',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/Skule_Shirt_Grey_S_3.jpg?v=1631502697',
      price: '13.27',
    },
    {
      title: 'Skule Shirt (Black)',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/Skule_Shirt_Black_S_1.jpg?v=1631502655',
      price: '13.27',
    },
    {
      title: 'Skule Shirt (Pink)',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/Skule_Shirt_Pink_XL.jpg?v=1631502751',
      price: '13.27',
    },
    {
      title: 'Skule Shirt (Red)',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/Skule_Shirt_Red_S_1.jpg?v=1631502778',
      price: '13.27',
    },
    {
      title: 'Movember Skule Shirt',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/IMG_1554.png?v=1630807603',
      price: '15.0',
    },
    {
      title: 'UofT Eng Shirt (Grey)',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/UofTEng_Shirt_Grey_M_1.jpg?v=1631503098',
      price: '13.27',
    },
    {
      title: 'UofT Eng Shirt (Red)',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/UofTEng_Shirt_Red_M_1.jpg?v=1631503125',
      price: '13.27',
    },
    {
      title: 'Bucket Hat',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/20210315-20210314132834_IMG_4052_d5281c2f-6bb6-40e5-b6f7-9f65acc6e8da.jpg?v=1629064878',
      price: '16.5',
    },
    {
      title: 'Skule Baseball Hat',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/IMG_1547.png?v=1630807034',
      price: '5.5',
    },
    {
      title: 'Retro White Toque',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/IMG_1630.png?v=1631133307',
      price: '16.5',
    },
    {
      title: 'Navy Blue Toque',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/20210215_125553_8fa234b5-d8e3-482f-9a0b-e8615a01a3aa.jpg?v=1629064874',
      price: '16.5',
    },
    {
      title: 'MSE Toque',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/IMG_1550.png?v=1630807177',
      price: '10.0',
    },
    {
      title: 'Iron Dragon Toque',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/IMG_1546.png?v=1630807246',
      price: '15.0',
    },
    {
      title: 'EngSoc Ties',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/web-85_aca75d3b-53b5-494b-941f-76b3d01e30cf.jpg?v=1629064868',
      price: '35.4',
    },
    {
      title: 'Eng Socks',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0569/4858/8753/products/IMG_1644.png?v=1631134425',
      price: '11.0',
    },
  ];

  const [numResultsDisplayed, setNumResultsDisplayed] = useState(10);
  const [currentPage, setCurrentPage] = useState(1); // default to display page 1
  let pageNumber = Math.ceil(productsList.length / numResultsDisplayed); // the number of page numbers you will have
  let numCurrentlyDisplayed = 0;
  let nthProduct = numResultsDisplayed * (currentPage - 1); // the nth account that is the first to be displayed on the page

  // make an array that stores page numbers
  let pageNumberList = [];
  for (let i = 1; i <= pageNumber; i++) {
    pageNumberList.push(i); // add each page # to list
  }
  return (
    <>
      <div className="all-products-title">
        <h1>ALL PRODUCTS</h1>
      </div>
      <hr />
      <div className="all-products-container">
        <div className="all-products-sidebar">{/* Awaiting Sidebar component */}</div>
        <div className="all-products-info">
          <div className="all-products-display">
            {productsList.map((product) => {
              numCurrentlyDisplayed = numCurrentlyDisplayed + 1;

              // only display a certain number of accounts if the number is between the ranges
              if (
                numCurrentlyDisplayed >= nthProduct + 1 &&
                numCurrentlyDisplayed <= nthProduct + numResultsDisplayed
              ) {
                return (
                  <>
                    <ItemDisplay
                      key={product.title}
                      name={product.title}
                      imageURL={product.imageURL}
                      price={product.price}
                    />
                  </>
                );
              }
            })}
          </div>
          <div className="all-products-page-numbers">
            <div
              className="page-number-arrow-container"
              style={currentPage > 1 ? {} : { pointerEvents: 'none', cursor: 'default' }}
            >
              <img
                className="page-number-arrow"
                src={ArrowRight}
                style={{ transform: 'rotate(180deg)' }}
                alt="left arrow"
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              />
            </div>
            {pageNumberList.map((num) => {
              return (
                <div
                  key={num}
                  className={`accounts-page-number-box ${
                    num === currentPage ? 'accounts-page-number-box-current' : ''
                  }`}
                  style={
                    num === 1
                      ? { borderLeftWidth: '2px' }
                      : num === pageNumber
                      ? { borderRightWidth: '2px' }
                      : {}
                  }
                  onClick={() => {
                    setCurrentPage(num);
                  }}
                >
                  <p>{num}</p>
                </div>
              );
            })}
            <div
              className="page-number-arrow-container"
              style={currentPage < pageNumber ? {} : { pointerEvents: 'none', cursor: 'default' }}
            >
              <img
                className="page-number-arrow"
                src={ArrowRight}
                alt="right arrow"
                onClick={() => {
                  if (currentPage < pageNumber) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PageAllProducts };
