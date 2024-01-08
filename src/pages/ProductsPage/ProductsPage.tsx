import { Link, useLocation, useParams } from 'react-router-dom';
import {
  Footer,
  Navbar,
  ProductCard,
  Error404,
} from '../../components/components-routes';
import { useFetch } from '../../hook/useFetch';

const ProductsPage = () => {
  let BASE_URL = 'http://localhost:3001/v1/clothes/';

  const collection = [
    'TODOS',
    'HOMBRE',
    'MUJER',
    'REMERAS',
    'BUZOS',
    'PANTALONES',
    'CAMPERAS',
    'VERANO 24',
  ];

  const sortOptions = ['Por precio mas bajo', 'Por precio mas alto'];

  const { queryParam } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchBarQuery = searchParams.get('q');
  const sortQuery = searchParams.get('sort');

  if (
    !collection.includes(queryParam?.toUpperCase() as string) ||
    queryParam === undefined
  ) {
    return <Error404 />;
  }

  if (queryParam) {
    BASE_URL = BASE_URL + queryParam;
  }

  if (sortQuery) {
    BASE_URL = BASE_URL + `?sort=${sortQuery}`;
  }

  console.log(BASE_URL);

  const { data, loading } = useFetch(
    BASE_URL,
    searchBarQuery ? searchBarQuery : ''
  );

  return (
    <>
      <Navbar />

      <div className='products-page__container'>
        <div className='products-page__options'>
          <div className='products-page__options-groups'>
            <span>Collections</span>
            {collection.map((element) => {
              return (
                <Link
                  key={element}
                  style={
                    element.toLowerCase() === queryParam?.toLowerCase()
                      ? { textDecoration: 'underline' }
                      : {}
                  }
                  to={`/search/${element.toLowerCase()}`}
                >
                  {element}
                </Link>
              );
            })}
          </div>
          <div className='products-page__options-groups'>
            <span>Filtar por:</span>
            {sortOptions.map((element) => {
              return (
                <Link
                  key={element}
                  style={
                    element.toLowerCase() ===
                    sortQuery?.toLowerCase().replace(/-/g, ' ')
                      ? { textDecoration: 'underline' }
                      : {}
                  }
                  to={`/search/${queryParam}?sort=${element
                    .toLowerCase()
                    .replace(/ /g, '-')}`}
                >
                  {element}
                </Link>
              );
            })}
          </div>
          {
            /*Mostrando resultados*/
            searchBarQuery ? (
              <span className='search-results_text'>
                Mostrando <strong>{data.length}</strong> resultados para la
                búsqueda:
                <strong>"{searchBarQuery}"</strong>
              </span>
            ) : null
          }
        </div>
        <div className='products-page__products-container'>
          {data.map((element) => {
            return (
              <ProductCard
                key={element.clothes_id}
                title={element.clothes_name}
                price={element.clothes_price}
                imageURL={element.clothes_image || null}
              />
            );
          })}

          {!loading && searchBarQuery && data.length === 0 ? (
            <h1>
              No se encontraron resultados para la búsqueda: "{searchBarQuery}"
            </h1>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
