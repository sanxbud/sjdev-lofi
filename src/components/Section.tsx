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
                  <span className="section-prompt text-green-400">sanjaybudhia@dev %</span>
                  <span className="section-head"><Typewriter words={[header]} typeSpeed={30} /></span>
                </div>
                {timer && <p className="section-body"><ReactMarkdown>{body}</ReactMarkdown></p>}
            
        </div>
    )
}


