import {  Link, NavLink } from "react-router-dom";
import user from "../../assets/user.png"
import "../../../src/index.css"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
    const {user:currentUser, logOut } = useContext(AuthContext) 
    return (
        <div className="flex justify-between items-center ">
            <div className={currentUser && "border bg-gradient-to-tl from-black/80 to-blue-900 text-white font-semibold p-2 rounded-sm"}>
               {currentUser?.email}
            </div>
            <div className={`space-x-5 ${currentUser || "ml-[121px]"} font-semibold text-gray-500`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-2">
                <img src={user} alt="" />
                {
                    currentUser && currentUser?.email? <button onClick={logOut} className="btn btn-neutral rounded-none">Log-Out</button> : <Link to="/auth/login" className="btn btn-neutral rounded-none">Log In</Link >
                }
                

            </div>
        </div>
    );
};

export default Navbar;