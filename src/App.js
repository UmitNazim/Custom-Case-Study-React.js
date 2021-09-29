import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './router';
import { Suspense, useState } from 'react';
import { connect } from 'react-redux';
import { getProducts } from 'store/Auth/actions';
import { AtomButton, AtomLoader } from 'components';
import { useTranslation } from 'react-i18next';

// useMemo
// context
// stateliftup

const App = () => {
  let { t } = useTranslation();
  const [isLoad, setIsLoad] = useState(false);

  const getDataFromState = async () => {
    setIsLoad(true);
    await new Promise((res) => {
      setTimeout(() => {
        res();
      }, 5000);
    });
    setIsLoad(false);
  };

  return (
    <div className="container-fluid">
      <AtomButton onClick={getDataFromState} type="submit" block className={['my-4']} size="md">
        {isLoad ? <AtomLoader size="md" /> : t('general.forgotPassword')}
      </AtomButton>

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
