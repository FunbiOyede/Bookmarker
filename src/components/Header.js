import React from 'react'
//functional component 
export default function Header() {
  return (
    <div style={header}>
         <h3>My Bookmarker App</h3>
    </div>
  )
}

let header = {
    backgroundColor:'black',
    color:'white',
    padding:'8px 0px'
}