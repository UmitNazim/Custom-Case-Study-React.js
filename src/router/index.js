import { Route } from 'react-router-dom';
import Authentication from './Authentication';
import Catalog from './Catalog';
import Errors from './Errors';

export default [...Authentication, ...Catalog, ...Errors].map(({ path, component, key }) => (
  <Route exact path={path} component={component} key={key} />
));
