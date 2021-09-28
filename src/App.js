import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './router';
import { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from 'store/Auth/actions';

// useMemo
// context
// stateliftup

const App = ({ getProducts, isLoading, products }) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container-fluid">
      {isLoading ? (
        <p>is loading...</p>
      ) : (
        products.map(({ id, description }, index) => {
          return (
            <div className="d-flex my-2" key={`product-item-${index}`}>
              {id}- {description}
            </div>
          );
        })
      )}

      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch className="route-fade">{routes}</Switch>
        </Suspense>
      </Router>
    </div>
  );
};

const mapStateToProps = ({ products, isLoading }) => ({ products, isLoading });
export default connect(mapStateToProps, { getProducts })(App);
