import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AtomInput, AtomButton, MoleculeCard } from 'components';

function RegisterContent() {
  let { t } = useTranslation();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');

  const onRegister = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <MoleculeCard style={{ width: '35%' }} title="Register Form">
        <form onSubmit={onRegister}>
          <div className="row">
            <div className="col-12">
              <AtomInput
                label={t('general.name')}
                name="name"
                value={name}
                placeholder={t('general.name')}
                onChange={(value) => setName(value)}
                required
                className={['mt-2']}
              />
            </div>
            <div className="col-12">
              <AtomInput
                label={t('general.surname')}
                name="surname"
                value={surname}
                placeholder={t('general.surname')}
                onChange={(value) => setSurname(value)}
                required
                className={['mt-2']}
              />
            </div>
            <div className="col-12">
              <AtomInput
                label={t('general.age')}
                name="age"
                value={age}
                placeholder={t('general.age')}
                onChange={(value) => setAge(value)}
                type="number"
                required
                className={['mt-2']}
              />
            </div>
            <div className="col-12">
              <AtomInput
                label={t('general.sex')}
                name="sex"
                value={sex}
                placeholder={t('general.sex')}
                onChange={(value) => setSex(value)}
                required
                className={['mt-2']}
              />
            </div>
          </div>
          <AtomButton type="submit" block className={['my-4']} size="md">
            {t('general.register')}
          </AtomButton>
        </form>
        <span className="atom-label">
          Already have an account?
          <Link to="/login" className="text-decoration-none">
            <span className="ms-1 atom-label__error hover-opacity-7">{t('general.login')}</span>
          </Link>
        </span>
      </MoleculeCard>
    </div>
  );
}

export default RegisterContent;
