import PropTypes from 'prop-types';

const Button = ({ name }) => (<button>{name}</button>);

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;