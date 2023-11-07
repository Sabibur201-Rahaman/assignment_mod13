import React from 'react'
import { useRef } from 'react'
import Services from './Services'
function About() {
    let headline=useRef()  
const change=()=>{
  headline.innerHTML="<ul><li>Hero<li>zero</li></ul>"
}
  return (
    <>
    <Services/>
      <h1 ref={(h1)=>headline=h1}></h1>
      <button onClick={change}>click</button>
    </>
  )
  
}

export default About
