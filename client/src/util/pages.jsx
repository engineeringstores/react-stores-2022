import { Page404 } from '../pages/404/404';
import { PageAbout } from '../pages/About/About';
import { PageHome } from '../pages/Home/Home';
import AuthorizedPage from './AuthorizedPage';

export const pages = {
  404: {
    label: '404',
    component: <Page404 />,
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
  special: [],
  hidden: [],
};
