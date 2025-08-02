import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import Auth from '../../Firebase/firebase.config'

export const authcontext =createContext(null)
const Privider = ({children}) => {

    const signUp =(email,password)=>{
        return createUserWithEmailAndPassword(Auth,email,password)
    }
    const login =( email,pass)=>{
        return signInWithEmailAndPassword(Auth,email,pass)
    }

    const name={
        login,
        signUp
    }
    return (
        <div>
            <authcontext.Provider value={name}>
                {children}
            </authcontext.Provider>
        </div>
    );
};

export default Privider;