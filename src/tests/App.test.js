import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

it('Renders App component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
