import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('Renders App component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
