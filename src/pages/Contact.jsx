import React, { useEffect, useState } from 'react'
import Services from './Services'
function Contact() {
let[data,setData]=useState()
    useEffect(()=>{
        (async()=>{
           let response=await fetch('https://dummyjson.com/products/1')
            let result=response.json() 
            setData(result)
        })()
    },[])
  return (
    <div>
        <Services/>
        <h1>jsonObject</h1>
      {JSON.stringify(data)}
    </div>
  )
}

export default Contact