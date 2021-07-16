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

    <div className="display">
      <span>
        {
          total
        }
        {
          operation
        }
        {
          next
        }
      </span>
    </div>
  );
}

Display.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }),
};

Display.defaultProps = {
  data: {},
};

export default Display;
