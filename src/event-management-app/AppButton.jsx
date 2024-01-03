import React from 'react'

const AppButton = ({text,style,handleClick}) => {
  return (
    <div>
      <button className={style} onClick={handleClick}>{text}</button>
    </div>
  )
}

export default AppButton
