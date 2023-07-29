'use client'
import React, { Context, useContext, createContext } from 'react';
const Client = createContext(null)


export function Providers({children}){
    return(
        <Client.Provider value={null}>
        {children}
        </Client.Provider>
    )
}