import classNames from 'classnames';
import PropTypes from 'prop-types';

function MoleculeInput({ disabled = false, label = null, onChange, className, ...props }) {
  let options = classNames({
    'molecule-input': true,
    'molecule-input__disabled': disabled,
  });
  return (
    <div className={className}>
      {label && (
        <label className="atom-label" htmlFor="input-field">
          {label}
        </label>
      )}
      <input onChange={onChange} className={options} type="text" disabled={disabled} {...props} />
    </div>
  );
}

MoleculeInput.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  onChange: PropTypes.func,
};

export default MoleculeInput;
