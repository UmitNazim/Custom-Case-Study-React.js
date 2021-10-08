import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from 'store/Auth/actions';
import { useTranslation } from 'react-i18next';
import { AtomButton, MoleculeInput, MoleculeCard, AtomLoader } from 'components';

const LoginContent = ({ login, history }) => {
  let { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setAllValues] = useState({ email: '', password: '' });
  const changeHandler = ({ target: { name, value } }) => setAllValues({ ...user, [name]: value });

  const onLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await login(user).then(() => history.push('/'));
    setIsLoading(false);
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <MoleculeCard style={{ width: '500px' }} title="Login Form">
        <form onSubmit={onLogin}>
          <MoleculeInput
            label={t('general.email')}
            name="email"
            value={user.email}
            placeholder={t('general.email')}
            className={['mt-2']}
            onChange={changeHandler}
            type="email"
            required
          />
          <MoleculeInput
            label={t('general.password')}
            name="password"
            value={user.password}
            placeholder={t('general.password')}
            className={['mt-2']}
            onChange={changeHandler}
            type="password"
            required
          />

          <AtomButton type="submit" block className={['my-4']} size="md">
            {isLoading ? <AtomLoader /> : t('general.login')}
          </AtomButton>

          <span className="atom-label">
            If you do not have an account?
            <Link to="/register" className="text-decoration-none">
              <span className="mx-1 atom-label__error hover-opacity-7">
                {t('general.register')}
              </span>
            </Link>
            or
            <Link to="/forgot-password" className="text-decoration-none">
              <span className="mx-1 atom-label__error hover-opacity-7">
                {t('general.forgotPassword')}
              </span>
            </Link>
            ?
          </span>
        </form>
      </MoleculeCard>
    </div>
  );
};

export default connect(null, { login })(LoginContent);
