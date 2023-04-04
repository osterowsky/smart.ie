import React from 'react'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <svg viewBox="0 0 1024 1024" className="component-icon">
        <path d="M554 426v-170h-84v170h84zM554 598v-86h-84v86h84zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
      </svg>
    </div>
  )
}

export default AppComponent
