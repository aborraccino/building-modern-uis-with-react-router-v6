import { Link } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

function Header2(){
    return (
    <header className="container">
    <Link to="/">
        <img
            className="logo"
            src={logo}
            alt="Red30 Tech logo"
            title="Red30 Tech | Home"
        />
    </Link>

    <nav>
        <Link to="/">Home</Link>
        <Link to="categories">Categories</Link>
        <Link to="about">About</Link>
    </nav>

    </header>

    );
}

export default Header2;

