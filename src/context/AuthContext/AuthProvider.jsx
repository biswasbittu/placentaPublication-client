import React from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from './AuthContext';
import auth from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };

    const signinGoogle=()=>{
        return signInWithPopup(auth,googleProvider)

    }
    const authInfo ={
        createUser,
        signinUser,
        signinGoogle,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;