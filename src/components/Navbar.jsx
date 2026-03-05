import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar(){

  return(
    <nav>

      <h2>My Portfolio</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><ThemeToggle/></li>
      </ul>

    </nav>
  );
}

export default Navbar;