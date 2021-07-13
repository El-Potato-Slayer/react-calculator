import PropTypes from 'prop-types';

function Button({ name, clickHandler }) {
  function handleClick(buttonName) {
    return clickHandler(buttonName);
  }

  return (
    <button type="button" onClick={() => { handleClick(name); }}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  clickHandler: null,
};

export default Button;
