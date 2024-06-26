import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {
  const [text, setText] = useState('')

  const onChange = e => {
    setText(e.target.value)
  }
  return (
    <>
      <Editor onChange={onChange} />
      <Preview text={text} />
    </>
  )
}

export default App
