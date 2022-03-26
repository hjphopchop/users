import React from 'react'
import cl from "./BasicBytton.module.css";

const BasicBytton = ({children, ...props}) => {
  return (
    <button {...props} className={cl.basicBtn}>
        {children}
    </button>
  )
}

export default BasicBytton