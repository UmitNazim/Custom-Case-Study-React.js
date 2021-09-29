import routes from './router';
import { Suspense } from 'react';
import { AtomLoader } from 'components';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

const Fallback = () => (
  <div className="d-flex justify-content-center align-items-center w-100 h-100">
    <AtomLoader color="red" size="xl" />
  </div>
);

const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Suspense fallback={<Fallback />}>
          <Switch>{routes}</Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
