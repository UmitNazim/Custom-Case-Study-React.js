import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AtomButton, AtomInput, MoleculeCard } from 'components';

function LoginContent() {
  let { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <MoleculeCard style={{ width: '35%' }} title="Login Form">
        <form onSubmit={onLogin}>
          <AtomInput
            label={t('general.email')}
            name="email"
            value={email}
            placeholder={t('general.email')}
            className={['mt-2']}
            onChange={({ target: { value } }) => setEmail(value)}
            type="email"
            required
          />
          <AtomInput
            label={t('general.password')}
            name="password"
            value={password}
            placeholder={t('general.password')}
            className={['mt-2']}
            onChange={({ target: { value } }) => setPassword(value)}
            type="password"
            required
          />
          <AtomButton type="submit" block className={['my-4']} size="md">
            {t('general.login')}
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
}
export default LoginContent;
