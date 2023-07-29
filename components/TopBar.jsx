import {useContext,useEffect} from 'react'
import {AuthContext} from './AuthContextProvider'

export default function TopBar(){
    const { isLoggedIn, oathData, logOut, setIsLoggedIn } = useContext(AuthContext);
    useEffect(()=>{
        console.log('topbar logout')
        console.log(logOut)
        console.log('oathData')
        console.log(oathData)
        console.log("isLoggedIn")
        console.log(isLoggedIn)
    },[isLoggedIn])

    function handleLogOut(){
        console.log('logging out')
        logOut.logOut()
        setIsLoggedIn(false)

    }

    return(
        <div className="h-10 w-100 bg-blue-500 text-white flex justify-between items-center px-4 my-5">
            <div className="flex-1 text-center">
                Title
            </div>
            {isLoggedIn && 
                <div className="flex items-center">
                    <div className="mr-4">
                        User: {oathData.username}
                    </div>
                    <button 
                        onClick={handleLogOut}
                        className="border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-500"
                        >logout</button>
            </div>}
        </div>
    )
}
