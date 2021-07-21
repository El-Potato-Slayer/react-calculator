import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('Renders Button component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});

it('Renders button correctly', () => {
  const { getByTestId } = render(<Button name="1" />);
  expect(getByTestId('button')).toHaveTextContent('1');
});

it('Renders button incorrectly', () => {
  const { getByTestId } = render(<Button name="1" />);
  expect(getByTestId('button')).not.toHaveTextContent('2');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Button name="1" />).toJSON();
  expect(tree).toMatchSnapshot();
});
