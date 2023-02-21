import { useLocation } from 'react-router-dom';

import { BuyButton } from '../../components/buyButton/buyButton';

const PageProduct = () => {
  const location = useLocation();

  return (
    <>
      <h1
        style={{
          'padding-top': '50vh',
        }}
      >
        {location.pathname.substring(location.pathname.lastIndexOf('/') + 1)}
      </h1>
      <BuyButton productID={location.pathname.substring(location.pathname.lastIndexOf('/') + 1)} />
    </>
  );
};

export { PageProduct };
