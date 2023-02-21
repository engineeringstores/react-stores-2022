import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../state/productCollection/productCollectionSlice';
import { collectionsSelector } from '../../state/collections/collectionsSlice';
import { productSelector } from '../../state/product/productSlice';
import { getProduct } from '../../state/product/saga';
import { getCollections } from '../../state/collections/saga';
import { getProducts } from '../../state/productCollection/saga';

import { homeAboutMessage, homeStaples, locationDesc, operationHours } from '../../util/homeBlurb';

import Arrow from '../../assets/icons/angle-down-solid.svg';
import LocationImg from '../../assets/images/location.svg';
import { Button } from '../../components/button/Button';

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
      <HomeLocation />

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
        <Link to={'/about'}>
          <Button text={'MEET THE TEAM'} />
        </Link>
      </div>
    </>
  );
};

const HomeStaples = () => {
  return (
    <>
      <div className="home-staples">
        <h1>OUR TRADITIONS</h1>
        <div className="home-staples-container">
          {homeStaples.map((staple) => {
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
  const linkText = 'Click to learn more!';

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

const HomeLocation = () => {
  const header = 'where to find us';

  return (
    <>
      <div className="home-location-container">
        <h1 className="title-style" style={{ color: 'var(--white)' }}>
          {header}
        </h1>
        <p
          className="home-staples-description-text"
          style={{ marginBottom: '50px', padding: '0 10%' }}
        >
          {locationDesc}
        </p>
        <div className="home-location-subcontainer">
          <img className="home-location-image" src={LocationImg} />
          <div className="home-location-hours-container">
            <h2 className="home-location-hours-title">HOURS</h2>
            <table id="operation-hours" className="home-location-hours-table">
              <tbody>
                {operationHours.map((date) => {
                  return (
                    <tr key={date.day}>
                      <td>{date.day.toUpperCase()}</td>
                      <td>{date.time.toUpperCase()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
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
