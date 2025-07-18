import { useEffect, useState } from 'react'
import './App.css'
import lilguy from './assets/ugotthislilguy.png'
import meNZ from './assets/images/me_nz.jpg'
import cow from './assets/images/cow.jpg'
import caniplayit from './assets/images/caniplayit.png'
import { Welcome, Interests, Toolbelt, Experience, Projects, Contact, Whois } from './sections'
import { FloatingImage } from './components/FloatingImage'

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

  return (

        <div className="overflow-x-hidden">
        
 <FloatingImage src={meNZ} x={22} y={18} rotate={-3} width={55} />
            <FloatingImage src={cow} x={-22} y={65} rotate={3} width={55}/>
            <FloatingImage src={caniplayit} x={15} y={115} rotate={-4} width={65}/>

            <div className="relative w-screen max-w-6xl mx-auto px-10 py-14 pt-px text-left items-start text-lg space-y-10 font-mono whitespace-pre-wrap" style={{zIndex:2}}>
            
                <img src={lilguy} alt="you got this" className="mx-auto w-40"/>
                {sections.slice(0, visibleIndex + 1)}
            </div>
        </div>
  )
}

export default App

