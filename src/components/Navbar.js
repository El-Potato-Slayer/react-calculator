import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote Of The Day</Link>
    </nav>
  );
}

export default Navbar;
