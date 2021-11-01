/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';

const Logo = (props) => {
  return(
    <div className="logo" style={{
      fontSize: '1.5rem',
      color: 'white',
      fontWeight: '700'
    }}>
      {props.children}
    </div>
  )
}
export default Logo;