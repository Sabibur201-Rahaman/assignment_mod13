import React, { Component } from 'react'
import { useRef } from 'react'
import Services from './Services'
import Component_1 from '../components_1/component_1'
import Component_2 from '../components_1/component_2'
import Component_4 from '../components_1/component_4'
import Component_3 from '../components_1/component_3'
function About() {
    let headline=useRef()  
const change=()=>{
  headline.innerHTML="<ul><li>Hero<li>zero</li></ul>"
}
  return (
    <>
    <Services/>
    <Component_1/>
    <Component_2/>
    <Component_3/>
    <Component_4/>
      <h1 ref={(h1)=>headline=h1}></h1>
      <button onClick={change}>click</button>
    </>
  )
  
}

export default About
