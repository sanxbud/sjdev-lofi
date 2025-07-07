import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

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
        <>
            <p className="section-prompt">sanjaybudhia@dev %</p><p className="section-head" ><Typewriter words={ [header] } typeSpeed={30}/></p>
            {timer && <p className="section-body" ><Typewriter words={[ body ]} typeSpeed={25}/></p>}
        </>
    )
}


