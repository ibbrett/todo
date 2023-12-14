// Button.jsx
import React from 'react'

// eslint-disable-next-line react/prop-types
const Button = ({ handleClick, children }) => {
  console.log('Button Component Renders - ', { children })
  return <button onClick={handleClick}>{children}</button>
}

const MemoizedButton = React.memo(Button)
export default MemoizedButton
