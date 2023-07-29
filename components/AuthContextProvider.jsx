'use client'
import React, { useState, createContext } from 'react';
export const AuthContext = createContext(null)


export function AuthContextProvider({children}){
    const [oathData, setOathData] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [logOut, setLogOut] = useState(null)
    const authValues={
        logOut, 
        setLogOut,
        isLoggedIn,
        setIsLoggedIn,
        oathData,
        setOathData,
    }
    return(
        <AuthContext.Provider value={authValues}>
        {children}
        </AuthContext.Provider>
    )
}