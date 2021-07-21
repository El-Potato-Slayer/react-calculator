import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import Navbar from './Navbar';

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
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <div className="home">
            <h3>Welcome to our page!</h3>
            <p>
              We&apos;re no strangers to love
              {' '}
              <br />
              You know the rules and so do I
              {' '}
              <br />
              A full commitment&apos;s what I&apos;m thinking of
              {' '}
              <br />
              You wouldn&apos;t get this from any other guy
              {' '}
              <br />
              <br />
              <br />
              I just wanna tell you how I&apos;m feeling
              {' '}
              <br />
              Gotta make you understand
              {' '}
              <br />
              <br />
              <br />
              Never gonna give you up
              {' '}
              <br />
              Never gonna let you down
              {' '}
              <br />
              Never gonna run around and desert you
              {' '}
              <br />
              Never gonna make you cry
              {' '}
              <br />
              Never gonna say goodbye
              {' '}
              <br />
              Never gonna tell a lie and hurt you
              {' '}
              <br />
              <br />
              <br />
              We&apos;ve known each other for so long
              {' '}
              <br />
              Your heart&apos;s been aching but you&apos;re too shy to say it
              {' '}
              <br />
              Inside we both know what&apos;s been going on
              {' '}
              <br />
              We know the game and we&apos;re gonna play it
              {' '}
              <br />
              And if you ask me how I&apos;m feeling
              {' '}
              <br />
              Don&apos;t tell me you&apos;re too blind to see
              {' '}
              <br />
              <br />
              <br />
              Never gonna give you up
              {' '}
              <br />
              Never gonna let you down
              {' '}
              <br />
              Never gonna run around and desert you
              {' '}
              <br />
              Never gonna make you cry
              {' '}
              <br />
              Never gonna say goodbye
              {' '}
              <br />
              Never gonna tell a lie and hurt you
              {' '}
              <br />
              <br />
              <br />
              Never gonna give you up
              {' '}
              <br />
              Never gonna let you down
              {' '}
              <br />
              Never gonna run around and desert you
              {' '}
              <br />
              Never gonna make you cry
              {' '}
              <br />
              Never gonna say goodbye
              {' '}
              <br />
              Never gonna tell a lie and hurt you
              {' '}
              <br />
              <br />
              <br />
              Never gonna give, never gonna give
              {' '}
              <br />
              (Give you up)
              {' '}
              <br />
              <br />
              <br />
              We&apos;ve known each other for so long
              {' '}
              <br />
              Your heart&apos;s been aching but you&apos;re too shy to say it
              {' '}
              <br />
              Inside we both know what&apos;s been going on
              {' '}
              <br />
              We know the game and we&apos;re gonna play it
              {' '}
              <br />
              <br />
              <br />
              I just wanna tell you how I&apos;m feeling
              {' '}
              <br />
              Gotta make you understand
              {' '}
              <br />
              <br />
              <br />
              Never gonna give you up
              {' '}
              <br />
              Never gonna let you down
              {' '}
              <br />
              Never gonna run around and desert you
              {' '}
              <br />
              Never gonna make you cry
              {' '}
              <br />
              Never gonna say goodbye
              {' '}
              <br />
              Never gonna tell a lie and hurt you
              {' '}
              <br />
              <br />
              <br />
              Never gonna give you up
              {' '}
              <br />
              Never gonna let you down
              {' '}
              <br />
              Never gonna run around and desert you
              {' '}
              <br />
              Never gonna make you cry
              {' '}
              <br />
              Never gonna say goodbye
              {' '}
              <br />
              Never gonna tell a lie and hurt you
              {' '}
              <br />
              <br />
              <br />
              Never gonna give you up
              {' '}
              <br />
              Never gonna let you down
              {' '}
              <br />
              Never gonna run around and desert you
              {' '}
              <br />
              Never gonna make you cry
              {' '}
              <br />
              Never gonna say goodbye
              {' '}
              <br />
            </p>
          </div>
        </Route>
        <Route path="/calculator">
          <div className="calculator">
            <div>
              <Display data={data} />
              <ButtonPanel clickHandler={this.handleClick} />
            </div>
          </div>
        </Route>
        <Route path="/quote">
          <div className="quote-wrapper">
            <div>
              <q>
                Mathematics is not about pregnancies, cookies, KFC or chocie milks;
                it is about numbers.
              </q>
              <p>- William Shakespeare</p>
            </div>
          </div>
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
