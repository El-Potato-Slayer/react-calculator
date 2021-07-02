import PropTypes from 'prop-types';

const Button = ({ name }) => (<div><p>{name}</p></div>);

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
