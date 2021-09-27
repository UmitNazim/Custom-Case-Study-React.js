import { Route } from 'react-router-dom';
import Authentication from './Authentication';
import Catalog from './Catalog';

export default [...Authentication, ...Catalog].map(({ path, component, key }) => (
  <Route exact path={path} component={component} key={key} />
));
