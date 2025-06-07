import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with value ', counter)

  const incrementBy1 = () => {
    setCounter(counter + 1)
    console.log('rendering with value before increment ', counter)
  }
  const decrementBy1 = () => {
    setCounter(counter - 1)
    console.log('rendering with value before decrement ', counter)
  }
  const setto0 = () => {
    console.log('rendering with value before reset ', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={incrementBy1} text='+' />
      <Button onClick={decrementBy1} text='-' />
      <Button onClick={setto0} text='Reset' />
    </div>
  )
}

export default App

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>