// Parent.jsx

import { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Display from './Display'
import Child from './Child'

const Parent = () => {
  const [salary, setSalary] = useState(2000)
  const [age, setAge] = useState(30)

  const incrementAge = useCallback(() => {
    setAge(age + 5)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 100)
  }, [salary])

  // add childNumber for Child component
  const [childNumber, setChildNumber] = useState(0)

  const memoizedCallback = useCallback(number => changeChildNumber(number), [])

  function changeChildNumber(number) {
    setChildNumber(number)
  }

  return (
    <div>
      <Title />
      <Display text="age" displayvalue={age} />
      <Button handleClick={incrementAge}>Update Age</Button>
      <Display text="salary" displayvalue={salary} />
      <Button handleClick={incrementSalary}>Update Salary</Button>
      <Child changeNumber={memoizedCallback} number={childNumber} />
    </div>
  )
}

export { Parent }
