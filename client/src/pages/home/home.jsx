import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './home.scss';

import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../state/productCollection/productCollectionSlice';
import { collectionsSelector } from '../../state/collections/collectionsSlice';
import { productSelector } from '../../state/product/productSlice';
import { getProduct } from '../../state/product/saga';
import { getCollections } from '../../state/collections/saga';
import { getProducts } from '../../state/productCollection/saga';

import { homeAboutMessage, homeStaples } from '../../util/homeBlurb';

import CoviesPhoto from '../../assets/merch/covies.jpg';
import Arrow from '../../assets/icons/angle-down-solid.svg';
import LeatherJacketSquare from '../../assets/merch/leather-jacket-square.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <HomeAbout />
      <HomeStaples />
      {/* <div
        style={{
          position: 'absolute',
          top: '500px',
          left: '50%',
          backgroundColor: 'red',
          width: '50px',
          height: '50px',
        }}
      ></div> */}

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
      <div className="home-header-container">
        <div className="home-header-container-contents">
          <div className="home-header-title-container">
            <h1 className="home-header-title">FOR STUDENTS.</h1>
            <h1 className="home-header-title">BY STUDENTS.</h1>
          </div>
          <img src={Arrow} className="home-arrow-icon"></img>
        </div>
      </div>
    </>
  );
};

const HomeAbout = () => {
  return (
    <>
      <div className="home-about-container">
        <h1 className="title-style">ABOUT</h1>
        <p>{homeAboutMessage}</p>
        {/* TODO: Button Component */}
        <div
          style={{
            width: '200px',
            margin: '20px',
            height: '50px',
            background: '#FFFFFF',
            border: '1px solid #A6B3DB',
            borderRadius: '10px',
          }}
        ></div>
      </div>
    </>
  );
};

const HomeStaples = () => {
  return (
    <>
      <div className="home-staples">
        {/* <h1 className="title-style">STAPLES</h1> */}
        <div className="home-staples-container">
          {homeStaples.map((staple) => {
            console.log(staple);
            return (
              <>
                <HomeStaplesComponent
                  key={staple.title}
                  title={staple.title}
                  image={staple.image}
                  desc={staple.desc}
                  url={staple.url}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const HomeStaplesComponent = ({ title, image, desc, url }) => {
  // const image = LeatherJacketSquare;
  // const title = 'LEATHER JACKETS';
  // const desc = 'Want to be a part of a long standing UofT Engineering tradition?';
  const linkText = 'Click to learn more!';
  // const url = '/leather-jackets';

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={
          open
            ? 'home-staples-component home-staples-component-open'
            : 'home-staples-component home-staples-component-close'
        }
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img className="home-staples-img" src={image} />
        <div className="home-staples-component-contents">
          <h1 className="home-staples-component-text">{title}</h1>
          {open ? (
            <>
              <div className="home-staples-description">
                <p className="home-staples-description-text">{desc}</p>
                <Link to={url}>
                  <p className="home-staples-link-text">{linkText}</p>
                </Link>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

HomeStaplesComponent.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string,
};

export { PageHome };
