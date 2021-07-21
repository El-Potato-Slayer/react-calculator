import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  const buttonNames = [['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']];

  function handleClick(buttonName) {
    return clickHandler(buttonName);
  }

  return (
    <div data-testid="button-panel" className="button-panel">
      {
        buttonNames.map((group) => (
          <div key={group}>
            {
              group.map((name) => (
                <Button key={name} name={name} clickHandler={() => handleClick(name)} />
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};
