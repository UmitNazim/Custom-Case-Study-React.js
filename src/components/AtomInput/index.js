import classNames from 'classnames';
import PropTypes from 'prop-types';

function AtomInput({ disabled = false, label = null, onChange, className, ...props }) {
  let options = classNames({
    'atom-input': true,
    'atom-input__disabled': disabled,
  });
  return (
    <div className={className}>
      {label && (
        <label className="atom-label" htmlFor="input-field">
          {label}
        </label>
      )}
      <input
        onChange={({ target: { value } }) => onChange(value)}
        className={options}
        type="text"
        disabled={disabled}
        {...props}
      />
    </div>
  );
}

AtomInput.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  onChange: PropTypes.func,
};

export default AtomInput;
