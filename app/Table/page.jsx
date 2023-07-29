"use client"
import {useContext, useEffect, useState} from 'react'
import {AuthContext} from '../../components/AuthContextProvider'
import { useRouter } from 'next/navigation'
import pb from '../../lib/PocketBase'
import { columns } from "./columns"
import { DataTable } from "./DataTable"

export default function Table(){
    const [messageArray, setMessageArray] = useState([]) 
    const { isLoggedIn } = useContext(AuthContext);
    const router = useRouter()
    
    useEffect(()=>{
        if (!isLoggedIn){
            router.push('/'); // Redirect to the root page
        }
        else{
            getMessages()
        }
    },[isLoggedIn, router]);

    async function getMessages() {
        try{
            const MessageData = await pb
              .collection('messages')
              .getFullList({
                sort: '-created',
            });
            setMessageArray(MessageData)
        }
        catch(e){
            console.log('messageData Failed')
            console.log(e)
        }
        finally{
            console.log('messageData retrieved')

        }
      }

    return(

    <div>
        {
        messageArray.length > 0 ?

            <DataTable data={messageArray} columns={columns}/>

        : <div>data unavailable</div>
        }
    </div>
        )
}