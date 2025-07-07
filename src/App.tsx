import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Welcome, Thoughts,Interests,Toolbelt,Experience,Projects,Contact } from './sections'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="max-w-6xl mx-auto px-10 py-14 text-left text-lg space-y-20 font-mono whitespace-pre-wrap">

                <Welcome/>
                <Thoughts/>
                <Interests/>
                <Toolbelt/>
                <Experience/>
                <Projects/>
                <Contact/>
        </div>     
    </>
  )
}

export default App
