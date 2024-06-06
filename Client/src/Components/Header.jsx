import { Link } from "react-router-dom";
import LogOut from "./LogOut";

const Header = () => {
    return (
        <header>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <LogOut />
        </header>
    );
}

export default Header;
