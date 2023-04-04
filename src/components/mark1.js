import React from 'react'

import PropTypes from 'prop-types'

import './mark1.css'

const Mark1 = (props) => {
  return (
    <div className="mark1-mark">
      <div className="mark1-icon">
        <svg viewBox="0 0 1024 1024" className="mark1-icon1">
          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
        </svg>
      </div>
      <p className="mark1-label">{props.Label}</p>
    </div>
  )
}

Mark1.defaultProps = {
  Label: 'Duis aute irure dolor in reprehenderit',
}

Mark1.propTypes = {
  Label: PropTypes.string,
}

export default Mark1
