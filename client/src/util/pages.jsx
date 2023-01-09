//import { Page404 } from '../pages/404/404';
import { PageAbout } from '../pages/about/about';
import { PageCollections } from '../pages/collections/collections';
import { PageConsignment } from '../pages/consignment/consignment';
import { PageHome } from '../pages/home/home';
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
  hidden: [],
};
