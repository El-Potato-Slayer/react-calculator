import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

afterEach(cleanup);

it('Renders Navbar component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
    div,
  );
});

it("ensures 'Mathematics Meow Meow' text is rendered", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(getByTestId('navbar')).toHaveTextContent('Mathematics Meow Meow');
});

it("ensures 'Home' link is rendered", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(getByTestId('navbar')).toHaveTextContent('Home');
});

it("ensures 'Calculator' link is rendered", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(getByTestId('navbar')).toHaveTextContent('Calculator');
});

it("ensures 'Quote Of The Day' link is rendered", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(getByTestId('navbar')).toHaveTextContent('Quote Of The Day');
});

it("ensures 'Swag' text is not rendered", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(getByTestId('navbar')).not.toHaveTextContent('Swag');
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
