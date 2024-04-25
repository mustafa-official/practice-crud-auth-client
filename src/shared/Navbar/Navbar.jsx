import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <header className="flex gap-6">
            <Link to="/" className="text-secondary">Home</Link>
            <Link to="/addCoffee" className="text-secondary">Add Coffee</Link>
            <Link to="/register" className="text-secondary">Register</Link>
            <Link to="/login" className="text-secondary">Login</Link>
            <Link to="/authUser" className="text-secondary">Auth User</Link>
        </header>
    );
};

export default Navbar;