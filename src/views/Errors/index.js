import { AtomButton } from 'components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Error = () => {
  const { t } = useTranslation();

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-white">
      <div className="text-center">
        <h1 style={{ fontSize: '100px' }} className="text-black fw-bold">
          {t('error.pageNotFound')}
        </h1>
        <Link to="/login">
          <AtomButton className={['px-4']} size="lg" bgColor="navy-blue" color="white">
            {t('general.takeMeToHome')}
          </AtomButton>
        </Link>
      </div>
    </div>
  );
};

export default Error;
