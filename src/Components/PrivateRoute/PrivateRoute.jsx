import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loader } = useContext(AuthContext)
    const location = useLocation()

    if(loader)
    {
        return <Loading></Loading>
    }

    if(user && user?.email)
    {
       return children
    }
    
    return <Navigate state={location} to="/auth/login"></Navigate> ;
};

export default PrivateRoute;