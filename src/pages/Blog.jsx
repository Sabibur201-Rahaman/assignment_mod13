import React from 'react'
import { useState } from 'react'
import Services from './Services'
function Blog() {
    let[count,setCount]=useState(0)
    const change=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <Services/>
        <p>{count}</p>
      <button onClick={change}>clickToIncrement</button>
    </div>
  )
}

export default Blog
