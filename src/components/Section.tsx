import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'

type SectionProps = {
    header:string
    body:string
}


export const Section = ({header,body}:SectionProps) => {
    const [timer,setTimer] = useState(false);

    useEffect(()=>{
        const timeout = setTimeout(()=> setTimer(true),1500)
        return() => clearTimeout(timeout)

    }, [])


    return(
        <div className="space-y-2">
            
                <div className="section-line flex gap-2">
                  <span className="section-prompt text-amber-200">sanjaybudhia@dev %</span>
                  <span className="section-head text-yellow-100"><Typewriter words={[header]} typeSpeed={30} /></span>
                </div>
               <p className={`section-body transition-opacity duration-500 ${timer ? 'opacity-100' : 'opacity-0'}`}>
                      <ReactMarkdown>{body}</ReactMarkdown>
                    </p>


            
        </div>
    )
}


