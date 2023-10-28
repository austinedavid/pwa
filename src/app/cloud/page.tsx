"use client"
import React, {useState} from 'react'
import axios from 'axios'

const page = () => {
    const uploadUrl = "https://api.cloudinary.com/v1_1/dgu1akbmr/images/upload"
    const[image, setImage] = useState<string[]>()
// populate the image to the state
    const changeImage = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(!e.target.files)return
       const files = e.target.files

       const newArray = Array.from(files)
       let allArray:any = []
       
       for(let i = 0; i<newArray.length; i++){
         const reader = new FileReader();
         reader.readAsDataURL(newArray[i])
         reader.onloadend = ()=>{
           allArray.push(reader.result)
         }
       }
       setImage(allArray)
      console.log(allArray)
      console.log(image)
      
    }
// handle the upload to the croudinary dashboard
// const uploadNow = async()=>{
//     // getting the data needed now
//     console.log(image)
//     const files: File[] = Array.from(image!);
//     console.log(files)
//    let total = []
//    for(let i = 0; i < files.length; i++){
//     total.push(i)
//    }
//    console.log(total)
//     // const form = new FormData()
//     // form.append("file",image)
//     // form.append("upload_preset", "images")
//     // // uploading to croudinary
//     // const runs = await axios.post(uploadUrl, {form})
//     // console.log(runs.data)
   
// }
const uploadNow = async()=>{
    // here we first upload to cloudinary
    // for(let i = 0; i<image?.length!; i++){
    //     const formDate = new FormData()
    //     formDate.append("file", image![i])
    //     formDate.append("upload_preset", "images")
    //     // here we then upload to cloudinary
    //     await axios.post(uploadUrl,{formDate}).then((response)=>console.log(response))
    // }
    await axios.get("'https://jsonplaceholder.typicode.com/todos/1'").then((result)=>console.log(result.data))
}
  return (
    <div>
        <p>cloudinary page</p>
        <input type='file' onChange={changeImage} multiple/>
        <button onClick={uploadNow}>upload now</button>
    </div>
  )
}

export default page