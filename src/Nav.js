import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="Nav">
            <h1>Logo</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/explore">Explore</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
