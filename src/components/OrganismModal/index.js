import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function OrganismModal({
  onClose,
  size = 'sm',
  closeOnOutSideClick = false,
  fullScreenOnMobile = false,
  flat = false,
  children = null,
  footer = null,
}) {
  const options = classNames({
    [`organism-modal__${size}`]: true,
    'rounded-0': flat,
    'organism-modal__content': true,
    'p-3': true,
    'd-flex': true,
    'flex-column': true,
    'organism-modal__fullscreen-on-mobile': fullScreenOnMobile,
  });

  useEffect(() => {
    document.querySelector('body').classList.add('overflow-hidden');
    return () => {
      document.querySelector('body').classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      {...(closeOnOutSideClick && { onClick: onClose })}
      className="organism-modal__overlay d-flex justify-content-center align-items-center"
    >
      <div className={options}>
        <header>
          <img
            onClick={onClose}
            src={require('../../assets/icons/close.svg').default}
            className="cursor-pointer text-mid-grey float-end"
          />
        </header>
        {children && <main className="organism-modal__main mt-1">{children}</main>}
        {footer && <footer>{footer}</footer>}
      </div>
    </div>,
    document.getElementById('app-modal'),
  );
}

OrganismModal.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  closeOnOutSideClick: PropTypes.bool,
  fullScreenOnMobile: PropTypes.bool,
  flat: PropTypes.bool,
  onClose: PropTypes.func,
};

export default OrganismModal;
