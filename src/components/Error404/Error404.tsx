import { Navbar } from '../components-routes';

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '80vh' }}>
        <h3>Error 404 | Page not Found</h3>
      </div>
    </>
  );
};

export default Error404;
