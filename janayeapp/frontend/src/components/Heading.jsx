import React from 'react'
import '../styles/Heading.css'

const Heading = (props) => {
    return (
        <div className={`web-heading ${props.center ? 'centered' : ''}`}> {props.title}</div>
    )
  }
  
  export default Heading