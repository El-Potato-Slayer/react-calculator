import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav data-testid="navbar" className="navbar">
      <p>Mathematics Meow Meow</p>
      <div>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote Of The Day</Link>
      </div>
    </nav>
  );
}

export default Navbar;
