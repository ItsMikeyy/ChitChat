import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </header>
    );
}

export default Header;
