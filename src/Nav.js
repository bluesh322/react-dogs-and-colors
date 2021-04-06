import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink exact to="/dogs">
                Home
            </NavLink>
            <NavLink style={{margin: "1em"}} exact to="/colors">
                Colors
            </NavLink>
        </nav>
    )
}

export default Nav;