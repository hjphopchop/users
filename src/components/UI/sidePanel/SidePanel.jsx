import React from 'react'
import BasicBytton from '../button/BasicBytton'
import cl from "./SidePanel.module.css"

const SidePanel = () => {
  return (
    <div className={cl.sidePanel}>
      <div>Сортировка</div>
      <BasicBytton>По городу</BasicBytton>
      <BasicBytton>По компании</BasicBytton>
    
    </div>
  )
}

export default SidePanel