import React, { useEffect } from 'react';
import './home.scss';

import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../state/productCollection/productCollectionSlice';
import { collectionsSelector } from '../../state/collections/collectionsSlice';
import { productSelector } from '../../state/product/productSlice';
import { getProduct } from '../../state/product/saga';
import { getCollections } from '../../state/collections/saga';
import { getProducts } from '../../state/productCollection/saga';

import CoviesPhoto from '../../assets/merch/covies.jpg';
import Arrow from '../../assets/icons/angle-down-solid.svg';

const PageHome = () => {
  const { collections } = useSelector(collectionsSelector);
  const { products } = useSelector(productsSelector);
  const { product } = useSelector(productSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct({ prodID: '6716470722769' }));
    dispatch(getCollections());
    dispatch(getProducts({ collectionID: '271215198417' }));
  }, []);

  return (
    <>
      <HomeHeader />
      <div
        style={{
          position: 'absolute',
          top: '500px',
          left: '50%',
          backgroundColor: 'red',
          width: '50px',
          height: '50px',
        }}
      ></div>

      <div style={{ backgroundColor: 'red' }}>
        {collections.map((collection) => {
          return <li key={collection.id}>{collection.title}</li>;
        })}
      </div>
      <div style={{ backgroundColor: 'blue' }}>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </div>
      <div style={{ backgroundColor: 'green' }}>{product.id}</div>
    </>
  );
};

const HomeHeader = () => {
  const titleMessage1 = 'for students.\nby students.';

  return (
    <>
      <div className="home-header">
        <div className="home-header-container">
          <div className="home-header-title-container">
            <h1 className="home-header-title">FOR STUDENTS.</h1>
            <h1 className="home-header-title">BY STUDENTS.</h1>
          </div>

          <img src={Arrow} className="home-arrow-icon"></img>
        </div>

        <img src={CoviesPhoto} className="home-header-photo"></img>
      </div>
    </>
  );
};

export { PageHome };
