import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AtomButton, AtomInput, MoleculeCard } from 'components';

function ForgotPassword() {
  let { t } = useTranslation();
  const [email, setEmail] = useState('');

  const onForgotPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <MoleculeCard style={{ width: '35%' }} title="Forgot Password Form">
        <form onSubmit={onForgotPassword}>
          <AtomInput
            label={t('general.email')}
            name="email"
            value={email}
            placeholder={t('general.email')}
            className={['mt-2']}
            onChange={(value) => setEmail(value)}
            type="email"
            required
          />
          <AtomButton type="submit" block className={['my-4']} size="md">
            {t('general.forgotPassword')}
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
}
export default ForgotPassword;
