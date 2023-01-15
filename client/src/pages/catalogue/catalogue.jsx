import { useLocation } from 'react-router-dom';

const PageCatalogue = () => {
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
    </>
  );
};

export { PageCatalogue };
