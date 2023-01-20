import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../state/productCollection/productCollectionSlice';
import { collectionsSelector } from '../../state/collections/collectionsSlice';
import { productSelector } from '../../state/product/productSlice';
import { getProduct } from '../../state/product/saga';
import { getCollections } from '../../state/collections/saga';
import { getProducts } from '../../state/productCollection/saga';

import { BuyButton } from '../../components/buyButton/buyButton';

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
      <BuyButton />
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

export { PageHome };
