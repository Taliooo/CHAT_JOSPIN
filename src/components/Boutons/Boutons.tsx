import React from 'react'
import './../..//styles/index.css'

function Boutons({label,icon}:{label?:string,icon?:React.ReactNode}) {
  return (
    <button className='boutons'>
        {icon && <span className='icon'>{icon}</span>}
        {label && <span>{label}</span>}
    </button>
  )
}

export default Boutons