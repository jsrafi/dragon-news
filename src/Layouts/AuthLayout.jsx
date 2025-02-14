import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const AuthLayout = () => {
    return (
        <div className="bg-gray-100">
            <div className="py-5 w-11/12 mx-auto">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;