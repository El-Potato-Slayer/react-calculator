import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../components/Display';

afterEach(cleanup);

it('Renders Display component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display data={{ total: '1', next: '5', operation: '+' }} />, div);
});

it('ensures total is 1', () => {
  const { getByTestId } = render(<Display data={{ total: '1', next: '5', operation: '+' }} />);
  expect(getByTestId('display')).toHaveTextContent('1');
});

it('ensures total is not 2', () => {
  const { getByTestId } = render(<Display data={{ total: '1', next: '5', operation: '+' }} />);
  expect(getByTestId('display')).not.toHaveTextContent('2');
});

it('ensures next is 5', () => {
  const { getByTestId } = render(<Display data={{ total: '1', next: '5', operation: '+' }} />);
  expect(getByTestId('display')).toHaveTextContent('5');
});

it('ensures next is not 4', () => {
  const { getByTestId } = render(<Display data={{ total: '1', next: '5', operation: '+' }} />);
  expect(getByTestId('display')).not.toHaveTextContent('4');
});

it('ensures operation is not -', () => {
  const { getByTestId } = render(<Display data={{ total: '1', next: '5', operation: '+' }} />);
  expect(getByTestId('display')).not.toHaveTextContent('-');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Display data={{ total: '1', next: '5', operation: '+' }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
