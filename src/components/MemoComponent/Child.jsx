import React from 'react'

// eslint-disable-next-line react/prop-types
function Child({ changeNumber, number }) {
  console.log('Child Component Renders - ', { number })
  function test() {
    changeNumber(Math.random())
    console.log('Child is rendering')
  }

  return (
    <div>
      <h1> Child: {number} </h1>
      <button onClick={test}> Click to change child value</button>
    </div>
  )
}

const MemoizedChild = React.memo(Child)
export default MemoizedChild
