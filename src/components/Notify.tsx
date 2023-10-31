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
  return (
    <div>
        <button onClick={handleNotification} className=' bg-red-600 text-white'>
            Notifify me
        </button>
    </div>
  )
}

export default Notify