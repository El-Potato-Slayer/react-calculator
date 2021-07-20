import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('Renders ButtonPanel component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonPanel />, div);
});

it('Renders ButtonPanel component correctly', () => {
  const { getByTestId } = render(
    <ButtonPanel />,
  );
  expect(getByTestId('button-panel')).toHaveTextContent('1');
});

it('Renders ButtonPanel component incorrectly', () => {
  const { getByTestId } = render(
    <ButtonPanel />,
  );
  expect(getByTestId('button-panel')).not.toHaveTextContent('abc');
});

it('matches snapshot', () => {
  const tree = renderer.create(<ButtonPanel />).toJSON();
  expect(tree).toMatchSnapshot();
});
