import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { forgotPassword } from 'store/Auth/actions';
import { AtomButton, AtomInput, MoleculeCard, AtomLoader } from 'components';

const ForgotPassword = ({ forgotPassword, history }) => {
  let { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onForgotPassword = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await forgotPassword({ email }).then(() => history.push('/login'));
    setIsLoading(false);
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <MoleculeCard style={{ width: '500px' }} title="Forgot Password Form">
        <form onSubmit={onForgotPassword}>
          <AtomInput
            label={t('general.email')}
            name="email"
            value={email}
            placeholder={t('general.email')}
            className={['mt-2']}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />

          <AtomButton type="submit" block className={['my-4']} size="md">
            {isLoading ? <AtomLoader /> : t('general.forgotPassword')}
          </AtomButton>

          <span className="atom-label">
            Did you remember your password ?
            <Link to="/login" className="text-decoration-none">
              <span className="mx-1 atom-label__error hover-opacity-7">{t('general.login')}</span>
            </Link>
          </span>
        </form>
      </MoleculeCard>
    </div>
  );
};

export default connect(null, { forgotPassword })(ForgotPassword);
