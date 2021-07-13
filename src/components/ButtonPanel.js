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
    <div>
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
          /* if ((index) % 4 === 0) {
            return (
              <div>
                <Button name={name} />
              </div>
            );
          }
          return (
            <Button key={(index + 1).toString()} name={name} />
          ); */
      /* <div>
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" />
      </div>
      <div>
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="x" />
      </div>
      <div>
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </div>
      <div>
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </div>
      <div>
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div> */}
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
