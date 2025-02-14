import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password)=>
    {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const [user, setUser] = useState(null)
    console.log(user)

    const logOut =()=>
        {
            return signOut(auth)
            
        }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        signInUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }

    }, [])

    

    return (
        <AuthContext.Provider value={authInfo} >
            {children}

        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;