import { BrowserRouter, useLocation, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ScrollToTop from './components/misc/ScrollToTop/ScrollToTop';
import { pages } from './util/pages';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { PageHome } from './pages/home/home';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <TransitionRoutes />
    </BrowserRouter>
  );
}

const TransitionRoutes = () => {
  const location = useLocation();
  return (
    <Navbar />
    //<PageHome />
    // <TransitionGroup>
    //   <Navbar />
    //   <ScrollToTop />
    //   <CSSTransition key={location.key} classNames="page" timeout={300}>
    //     <Routes location={location}>
    //       {[...pages.main, ...pages.hidden, ...pages.special].map((page) => {
    //         return (
    //           <Route
    //             path={page.path}
    //             key={page.path}
    //             element={
    //               <div
    //                 style={{
    //                   position: 'absolute',
    //                   right: 0,
    //                   left: 0,
    //                   bottom: 0,
    //                   top: 0,
    //                 }}
    //               >
    //                 <div style={{ minHeight: '100vh' }}>{page.component}</div>
    //                 {page.includeFooter ? <Footer /> : <></>}
    //               </div>
    //             }
    //           />
    //         );
    //       })}
    //       <Route path="*" element={pages['404'].component} />
    //     </Routes>
    //   </CSSTransition>
    // </TransitionGroup>
  );
};

export default App;
