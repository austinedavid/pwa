"use client"
import React from 'react'

const Notify = () => {
    const handleNotification = ()=>{
        if(!("Notification" in window)){
            alert("this browser does not support notification")
        }else if(Notification.permission == "granted"){
            new Notification("headers",{
                body:"message is here",
            })
        }else{
            Notification.requestPermission().then((permission)=>{
                if(permission == "granted"){
                    new Notification("header",{
                        body: "it is running now actually"
                    })
                }
            })
        }
    }

    const handleNew = ()=>{
        const newOne = new Notification("hello", {
            body:"lets run it",
            icon: "https://res.cloudinary.com/dgu1akbmr/image/upload/v1698173513/images/wg190h7xlvmn5ro32wmn.jpg"
        })
    }
  return (
    <div>
        <button onClick={handleNotification} className=' bg-red-600 text-white'>
            Notifify me
        </button>
        <button onClick={handleNew} className=' bg-green-600 text-white p-1'>
            new notification
        </button>
    </div>
  )
}

export default Notify