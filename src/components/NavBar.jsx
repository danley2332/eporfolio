import { Link } from 'react-router-dom'
function NavBar() {
    return(
     <nav className="Navigation">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/api">API</Link>
        <Link to="/Portfoio">Portfolio</Link>
     </nav>
    );
}

export default NavBar;




