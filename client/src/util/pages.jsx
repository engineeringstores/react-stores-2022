//import { Page404 } from '../pages/404/404';
import { PageAbout } from '../pages/about/about';
import { PageCollections } from '../pages/collections/collections';
import { PageCatalogue } from '../pages/catalogue/catalogue';
import { PageConsignment } from '../pages/consignment/consignment';
import { PageProduct } from '../pages/product/product';
import { PageCoveralls } from '../pages/coveralls/coveralls';
import { PageHome } from '../pages/home/home';
import { PageLeatherJacket } from '../pages/leatherJacket/leatherJacket';
import { PageShop } from '../pages/shop/shop';
//import AuthorizedPage from './AuthorizedPage';

export const pages = {
  404: {
    label: '404',
    //component: <Page404 />,
  },
  main: [
    {
      label: 'Home',
      component: <PageHome />,
      path: '/',
      includeFooter: true,
    },
    {
      label: 'About',
      component: <PageAbout />,
      path: '/about',
      includeFooter: true,
    },
  ],
  staples: [
    {
      label: 'Leather Jacket',
      component: <PageLeatherJacket />,
      path: '/leather-jacket',
    },
    {
      label: 'Coveralls',
      component: <PageCoveralls />,
      path: '/coveralls',
    },
  ],
  navbar: [
    {
      label: 'Shop',
      component: <></>,
      //path: '/shop',
    },
    {
      label: 'Collections',
      component: <PageCollections />,
      path: '/collections',
    },
    {
      label: 'Consignment',
      component: <PageConsignment />,
      path: '/consignment',
    },
    {
      label: 'About',
      component: <PageAbout />,
      path: '/about',
    },
    {
      label: 'Search',
      component: <></>,
      path: '/about',
    },
  ],
  special: [],
  hidden: [
    { label: 'Catalogue', component: <PageCatalogue />, path: '/catalogue/*' },
    { label: 'Product', component: <PageProduct />, path: '/product/*' },
  ],
};
