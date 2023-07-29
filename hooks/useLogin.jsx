"use client"
import {useState} from 'react'
import pb from '../lib/PocketBase'


export default function useLogin(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [oathData, setOathData] = useState(null);


    function logOut(){
      pb.authStore.clear();
      setIsLoggedIn(false)
    }

    async function login(){
        try{
            const authData = await pb
              .collection('users')
              .authWithOAuth2({ provider: 'github'});
        }
        catch(e){
          pb.authStore.clear();
          alert(e)
        }
        finally{
          setIsLoggedIn(pb.authStore.isValid)
          setOathData(pb.authStore.model)
        }
      }

    return {login, logOut, isLoggedIn, oathData}
}
