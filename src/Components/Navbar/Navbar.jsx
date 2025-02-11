import {  NavLink } from "react-router-dom";
import user from "../../assets/user.png"
import "../../../src/index.css"


const Navbar = () => {
    return (
        <div className="flex justify-between items-center ">
            <div>

            </div>
            <div className="space-x-5 ml-[121px] font-semibold text-gray-500">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-2">
                <img src={user} alt="" />
                <button className="btn btn-neutral rounded-none">Log In</button>

            </div>
        </div>
    );
};

export default Navbar;