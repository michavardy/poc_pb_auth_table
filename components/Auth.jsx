"use client"
import pb from '../lib/PocketBase'
import { useEffect, useContext} from 'react'
import { MdiGithub } from "../icons/github";
import useLogin from '../hooks/useLogin'
import {AuthContext} from './AuthContextProvider'

export default function Auth() {
    const {login, logOut, isLoggedIn, oathData} = useLogin()
    const { setOathData, setIsLoggedIn, setLogOut } = useContext(AuthContext);

    
    useEffect(()=>{
        if (isLoggedIn){
            console.log('logOut')
            console.log(logOut)
            setIsLoggedIn(isLoggedIn)
            setOathData(oathData)
            setLogOut({logOut: logOut})
        }
    },[isLoggedIn])

    return (
        <div>
        {
        !isLoggedIn && 
        <div>
        <h1>Please Sign In</h1>
        <button
            onClick={login}
            className="flex items-center justify-center p-2 "
        >
            <MdiGithub className="w-12 h-12" />
        </button>
        </div>
        }

        </div>
    )
}