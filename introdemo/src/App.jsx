import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const incrementBy1 = () => setCounter(counter + 1)
  const setto0 = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={incrementBy1} text='Add' />
      <Button onClick={setto0} text='Reset' />
    </div>
  )
}

export default App

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}