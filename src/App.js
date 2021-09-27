import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './router';
import { Suspense } from 'react';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch className="route-fade">{routes}</Switch>
        </Suspense>
      </Router>
    </div>
  );
}
export default App;
