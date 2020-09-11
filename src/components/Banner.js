import React from 'react'

const Banner = ({ children, tile, subtitle }) => {
  return (
    <div className="banner">
      <h1>{tile}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}

export default Banner
