import React from 'react'
import BasicBytton from '../button/BasicBytton'
import cl from "./SidePanel.module.css"

const SidePanel = ({sort1,sort2,setter}) => {
  return (
    <div className={cl.sidePanel}>
      <div>Сортировка</div>
      <BasicBytton  sort1={sort1}
      onClick ={()=>setter(sort1)}>
        По городу
        </BasicBytton>
      <BasicBytton  sort2={sort2}
       onClick ={()=>setter(sort2)}>По компании</BasicBytton>
    
    </div>
  )
}

export default SidePanel