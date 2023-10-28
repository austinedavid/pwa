"use client"
import React, {useState} from 'react'

const page = () => {
    const[name, setname] = useState<string>()
    const[email, setemail] = useState<string>()
  return (
    <div>
        <form onSubmit={()=>alert("yes ooo")}>
            <input required onChange={(e)=>setname(e.target.value)}/>
            <input required onChange={(e)=>setemail(e.target.value)}/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default page