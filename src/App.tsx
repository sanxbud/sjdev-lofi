import { useEffect, useState } from 'react'
import './App.css'
import lilguy from './assets/ugotthislilguy.png'
import { Welcome, Interests, Toolbelt, Experience, Projects, Contact, Whois } from './sections'

function App() {
  const [visibleIndex, setVisibleIndex] = useState(0)

  useEffect(() => {
    if (visibleIndex < 7) {
      const timeout = setTimeout(() => {
        setVisibleIndex(visibleIndex + 1)
      }, 2500) // adjust delay here
      return () => clearTimeout(timeout)
    }
  }, [visibleIndex])

  const sections = [
    <Welcome key="welcome" />,
    <Whois key="whois" />,
   //<Thoughts key="thoughts" />, no thoughts 
    <Interests key="interests" />,
    <Toolbelt key="toolbelt" />,
    <Experience key="experience" />,
    <Projects key="projects" />,
    <Contact key="contact" />,
  ]

  return (<>
        <img src={lilguy} alt="you got this" className="mx-auto w-40"/>
    <div className="w-screen  max-w-6xl mx-auto px-10 py-14 pt-px text-left items-start text-lg space-y-10 font-mono whitespace-pre-wrap">
      {sections.slice(0, visibleIndex + 1)}
    </div></>
  )
}

export default App

