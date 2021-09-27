import classNames from 'classnames';
import PropTypes from 'prop-types';

function MoleculeCard({
  title,
  children,
  color = 'white',
  shadow = false,
  flat = false,
  noPadding = false,
  hover = false,
  className = [],
  ...props
}) {
  let options = classNames({
    'molecule-card': true,
    [`bg-${color}`]: true,
    'molecule-card--shadow': shadow,
    'molecule-card--hover': hover,
    'rounded-0': flat,
    'p-0': noPadding,
    ...className.reduce((acc, curr) => ((acc[curr] = true), acc), {}),
  });

  return (
    <div className={options} {...props}>
      {title && <h5 className="text-center font-weight-bold mb-4">{title}</h5>}
      {children}
    </div>
  );
}

MoleculeCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  shadow: PropTypes.bool,
  flat: PropTypes.bool,
  noPadding: PropTypes.bool,
  hover: PropTypes.bool,
  children: PropTypes.any,
};

export default MoleculeCard;
