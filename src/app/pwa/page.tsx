"use client"
import React, {useEffect, useState} from 'react'
import  UseAddToHomescreenPrompt  from '@/utils/download'

const Pwa = () => {
    const[showBtn, setShowBtn] = useState(false)
    const[prompt, promptToInstall] = UseAddToHomescreenPrompt()
    // here, i am checking for if the browser has the necessary tools needed
    // to run the serviceWorker and also the standalone server for the app
    useEffect(()=>{
        if("serviceWorker" in navigator && window.matchMedia('(display-mode: standalone)').matches){
            setShowBtn(true)
        }else{
            setShowBtn(false)
        }
    },[])
  return (
    <div className=' w-full h-screen bg-white'>
        <p className=' text-black'>hiiii</p>
        <button onClick={promptToInstall} className=' p-2 bg-green-700 text-white'>
            download here
        </button>
    </div>
  )
}

export default Pwa