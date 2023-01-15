import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './navbar.scss';

import { pages } from '../../util/pages';

import HorizontalLogo from '../../assets/logo/es-horizontal-logo.svg';
import SearchIcon from '../../assets/icons/magnifying-glass-solid.svg';
import XIcon from '../../assets/icons/xmark-solid.svg';

import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../state/productCollection/productCollectionSlice';
import { collectionsSelector } from '../../state/collections/collectionsSlice';
import { productSelector } from '../../state/product/productSlice';
import { getProduct } from '../../state/product/saga';
import { getCollections } from '../../state/collections/saga';
import { getProducts } from '../../state/productCollection/saga';

// const { products } = useSelector(productsSelector);
// const { product } = useSelector(productSelector);

// dispatch(getProduct({ prodID: '6716470722769' }));
// dispatch(getCollections());
// dispatch(getProducts({ collectionID: '271215198417' }));

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollections());
    // console.log(collections);
  }, []);

  const [shopOpen, setShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();

  const navbarMessage =
    'Happy New Year Skule! We are open for shipping and in-person shopping, pickups, and shipping';

  return (
    <>
      <div className="navbar-container-dropdown">
        <div className="navbar-message-container">
          <h4 className="navbar-message">{navbarMessage.toUpperCase()}</h4>
        </div>
        <div className="navbar-container">
          <Link to={'/'} style={pathname === '/' ? { pointerEvents: 'none' } : {}}>
            <img className="navbar-logo" src={HorizontalLogo} />
          </Link>

          {searchOpen ? (
            <>
              <div className="search-container">
                <img className="navbar-search search-bar-icon" src={SearchIcon} />
                <input type="text" className="navbar-search-bar" placeholder="Search..." />
                <img
                  className="search-bar-close-icon"
                  src={XIcon}
                  onClick={() => {
                    setSearchOpen(!searchOpen);
                    setShopOpen(false);
                  }}
                />
              </div>
            </>
          ) : (
            <div className="navbar-container-links">
              {pages.navbar.map((item) => {
                if (item.label === 'Search') {
                  return (
                    <div
                      key={item.label}
                      className="navbar-link-container"
                      style={{ marginRight: 0 }}
                      onClick={() => {
                        setSearchOpen(!searchOpen);
                        setShopOpen(false);
                      }}
                    >
                      <img className="navbar-search" src={SearchIcon} />
                    </div>
                  );
                } else if (item.label === 'Shop') {
                  return (
                    <div
                      key={item.label}
                      className="navbar-link-container"
                      onClick={() => {
                        item.label === 'Shop'
                          ? shopOpen
                            ? setShopOpen(false)
                            : setShopOpen(true)
                          : setShopOpen(false);
                      }}
                    >
                      <h3 className="navbar-link-text">{item.label.toUpperCase()}</h3>
                      <div
                        className="navbar-underline"
                        style={shopOpen ? { backgroundColor: 'var(--dark-purple)' } : {}}
                      ></div>
                    </div>
                  );
                } else {
                  return (
                    <>
                      <Link
                        to={pathname === item.path ? {} : item.path}
                        key={item.path}
                        style={
                          pathname === item.path
                            ? { pointerEvents: 'none', cursor: 'context-menu' }
                            : {}
                        }
                      >
                        <div
                          key={item.label}
                          className="navbar-link-container"
                          onClick={() => {
                            item.label === 'Shop'
                              ? shopOpen
                                ? setShopOpen(false)
                                : setShopOpen(true)
                              : setShopOpen(false);
                          }}
                        >
                          <h3 className="navbar-link-text">{item.label.toUpperCase()}</h3>
                          <div
                            className="navbar-underline"
                            style={
                              pathname === item.path && !shopOpen
                                ? { backgroundColor: 'var(--dark-purple)' }
                                : {}
                            }
                          ></div>
                        </div>
                      </Link>
                    </>
                  );
                }
              })}
            </div>
          )}
        </div>
        <ShopDropDown open={shopOpen} />
      </div>
    </>
  );
};

const ShopDropDown = ({ open }) => {
  const { collections } = useSelector(collectionsSelector);

  const shopStaples = [
    { title: 'Leather Jackets', id: 'collection.id' },
    { title: 'Coveralls', id: 'collection.id' },
  ];
  const shopCategories = collections.map((collection) => {
    return { title: collection.title, id: collection.id };
  });
  const shopDisciplines = [
    { title: 'Chemical', id: 'collection.id' },
    { title: 'Civil', id: 'collection.id' },
    { title: 'ECE', id: 'collection.id' },
    { title: 'Industrial', id: 'collection.id' },
    { title: 'Material', id: 'collection.id' },
    { title: 'Mech', id: 'collection.id' },
  ];

  const shop = [
    {
      label: 'Staples',
      items: shopStaples,
    },
    {
      label: 'Categories',
      items: shopCategories,
    },
    {
      label: 'Disciplines',
      items: shopDisciplines,
    },
  ];

  return (
    <>
      {open ? (
        <>
          <div className="shop-container-bg shop-open">
            <div className="shop-container">
              <div className="shop-categories">
                <>
                  {shop.map((category) => {
                    return (
                      <>
                        <div key={category.label} className="shop-category-container">
                          <h2 className="shop-category-title">{category.label.toUpperCase()}</h2>

                          <div className="shop-category-text-row">
                            <div className="shop-category-text-column">
                              {category.items.map((item, i) => {
                                if (i < 5) {
                                  return (
                                    <>
                                      <Link to={`/catalogue/${item.id}`}>
                                        <h4 key={item.id} className="shop-category-text">
                                          {item.title}
                                        </h4>
                                      </Link>
                                    </>
                                  );
                                }
                              })}
                            </div>
                            {category.items.length >= 5 ? (
                              <div className="shop-category-text-column">
                                {category.items.map((item, i) => {
                                  if (i >= 5) {
                                    return (
                                      <Link to={`/catalogue/${item.id}`}>
                                        <h4 key={item.id} className="shop-category-text">
                                          {item.title}
                                        </h4>
                                      </Link>
                                    );
                                  }
                                })}
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="shop-container-bg shop-close">
            <div className="shop-container"></div>
          </div>
        </>
      )}
    </>
  );
};

ShopDropDown.propTypes = {
  open: PropTypes.bool,
};

export { Navbar };
