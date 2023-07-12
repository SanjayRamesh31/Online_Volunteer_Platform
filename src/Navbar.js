import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar(){
    return(
        <div className="navbar">
            <Link class="a" to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
        </div>
    );
}
export default Navbar;