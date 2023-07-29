"use client"
import {useContext, useEffect} from 'react'
import {AuthContext} from '../../components/AuthContextProvider'
import { useRouter } from 'next/navigation'
import {useForm} from "react-hook-form"
import pb from '../../lib/PocketBase'

export default function Form(){
    const { isLoggedIn } = useContext(AuthContext);
    const router = useRouter()
    const {register, handleSubmit, getValues} = useForm();

    useEffect(()=>{
        if (!isLoggedIn){
            router.push('/'); // Redirect to the root page
        }
    },[isLoggedIn, router]);

    async function onSubmit(data){
        try{
            const submitData = await pb
              .collection('messages')
              .create(data)
        }
        catch(e){
            console.log('submission failed')
            console.log(e)
        }
        finally{
            console.log('submission complete')
        }

    }
    
    return(
    <div className="flex flex-col items-center justify-center w-full">
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="name-inputs flex flex-row items-center mb-3">
              <div className="mr-3">
                <label className="text-black font-bold text-sm">First Name:</label>
                <input placeholder="First Name" {...register('first_name')} className="border-black border-2 rounded-md p-2 w-full" />
              </div>
              <div>
                <label className="text-black font-bold text-sm">Last Name:</label>
                <input placeholder="Last Name" {...register('last_name')} className="border-black border-2 rounded-md p-2 w-full" />
              </div>
            </div>
            <div className="form-input mb-3">
              <label className="text-black font-bold text-sm">Email:</label>
              <input type="email" placeholder="Enter your email" {...register('email')} className="border-black border-2 rounded-md p-2 w-full" />
            </div>
            <div className="form-input mb-3">
              <label className="text-black font-bold text-sm">Birthday:</label>
              <input type="date" placeholder="Enter your birthday" {...register('birthdate')} className="border-black border-2 rounded-md p-2 w-full" />
            </div>
            <div className="form-input mb-3">
              <label className="text-black font-bold text-sm">Message:</label>
              <input placeholder="Enter your message" {...register('message')} className="border-black border-2 rounded-md p-2 w-full" />
            </div>
            <button type="submit" className="border-2 border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-200">submit</button>
        </form>
        
    </div>
    )
}