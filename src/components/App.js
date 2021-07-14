import { Component, Fragment } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;
    const result = calculate({ total, next, operation }, buttonName);
    this.setState({ total: result.total, next: result.next, operation: result.operation });
  }

  render() {
    const data = this.state;

    return (
      <>
        <Display data={data} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
