import React from 'react'
import cl from "./Loader.module.css"

const Loader = () => {
  return (
    <div id="wrapper">
    
    <div className={cl.profilemainloader}>
      <div className={cl.loader}>
        <svg className={cl.circularloader} viewBox="25 25 50 50" >
          <circle className={cl.loaderpath} cx="50" cy="50" r="20" fill="none" stroke="#70c542" stroke-width="2" />
        </svg>
      </div>
    </div>
        
    </div>
  )
}

export default Loader