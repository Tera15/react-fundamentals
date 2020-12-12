// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [value, setValue ] = React.useState('')
  const [error, setError ] = React.useState(null)

  const inputRef = React.useRef(null)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (error || !value.length) return
    alert (inputRef.current.value.toLowerCase() )
  }
  const handleChange = (event) => {
    let currentValue = event.target.value;
    setValue(currentValue)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input onChange={handleChange} ref={inputRef} type="text" id="userName" value={value}/>
      </div>
      <button type="submit">Submit</button>
      {error ? <span>{error}</span> : null}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
