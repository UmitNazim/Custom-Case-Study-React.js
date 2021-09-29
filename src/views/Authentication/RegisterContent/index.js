import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'store/Auth/actions';
import { useTranslation } from 'react-i18next';
import { AtomInput, AtomButton, MoleculeCard, AtomLoader } from 'components';

const RegisterContent = ({ register, history }) => {
  let { t } = useTranslation();
  const [user, setAllValues] = useState({ name: '', surname: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const changeHandler = ({ target: { name, value } }) => setAllValues({ ...user, [name]: value });

  const onRegister = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await register(user).then(() => history.push('/login'));
    setIsLoading(false);
  };

  const inputFields = [
    { type: 'text', field: 'name' },
    { type: 'text', field: 'surname' },
    { type: 'email', field: 'email' },
    { type: 'password', field: 'password' },
  ];

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <MoleculeCard style={{ width: '500px' }} title="Register Form">
        <form onSubmit={onRegister}>
          <div className="row">
            {inputFields.map(({ type, field }, index) => (
              <div className="col-12" key={`register-form-field-${index}`}>
                <AtomInput
                  label={t(`general.${field}`)}
                  name={field}
                  value={user[field]}
                  placeholder={t(`general.${field}`)}
                  onChange={changeHandler}
                  required
                  type={type}
                  className={['mt-2']}
                />
              </div>
            ))}
          </div>

          <AtomButton type="submit" block className={['my-4']} size="md">
            {isLoading ? <AtomLoader /> : t('general.register')}
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
};

export default connect(null, { register })(RegisterContent);
