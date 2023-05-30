import React from "react"
import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserContext } from "./UserContext"

export function Header(){
    const {setUserInfo, userInfo} =useContext(UserContext)

    const headerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:'center',
    }
    const loginNavStyle ={
        marigin: '10px',
    }
    useEffect(()=>{
        fetch('/login', {
            credentials: 'include',
        }).then((res)=> res.json().then((userInfo)=>{
            setUserInfo(userInfo)
        }))
    },[])

    function logout(){
        fetch("/logout", {
          credentials: 'include',
          method: 'POST',
        })
        setUserInfo(null);
      }
    
    const username= userInfo?.username;


    return(
        <div className="bg-white shadow">
        <header className="container mx-auto flex justify-between items-center py-2 px-4" style={headerStyle}>
            <Link to='/' className="text-2xl font-bold text-gray-800">
                <img className="object-scale-down h-11"
                    src="https://i.ibb.co/2gxfCKh/owen.png"
                        id="owen"
                        alt="owen"
                        border="0"
      />
             </Link>
            <nav className="space-x-4">
                {/* if username  */} 
                {username && (
                    <>
                    <a href="" className="text-gray-800 hover:text-blue-500">Meme</a>
                    <a href="" className="text-gray-800 hover:text-blue-500" onClick={logout}>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link className="text-gray-800 hover:text-blue-500" to='/login'>Login</Link>
                        <Link className="text-gray-800 hover:text-blue-500" to='/register'>Register</Link>
                    </>
                )}

    
            </nav>
        </header>

        </div>
    )
}