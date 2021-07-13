import PropTypes from 'prop-types';

function Display({ data }) {
  let { total, next, operation } = data;
  if (!total) {
    total = '0';
  }
  if (!operation) {
    operation = '';
  }
  if (!next) {
    next = '';
  }
  return (

    <div>
      {
        total
      }
      {
        operation
      }
      {
        next
      }
    </div>
  );
}

Display.propTypes = {
  data: PropTypes.string,
};

Display.defaultProps = {
  data: '0',
};

export default Display;
