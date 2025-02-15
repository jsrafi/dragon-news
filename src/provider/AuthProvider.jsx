import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loader,setLoader] = useState(true);

    const createNewUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password)=>
    {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const [user, setUser] = useState(null)
    console.log(user)

    const logOut =()=>
        {
            setLoader(true);
            return signOut(auth)
            
        }

    const updateProfileData =(updatedData)=>
    {
        return updateProfile(auth.currentUser, updatedData)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        signInUser,
        loader,
        updateProfileData
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
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