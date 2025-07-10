
import { Section } from "../components/Section";


export const Interests = () =>{

    const interestHeader = `grep -i "interests" brain.dmp`
    const interestBody = `My goal is to build low-friction tools and apps that make people’s lives easier, help create the frameworks and systems that can get people closer to their goals, become the best version of myself and do as much as I can to help build a more empathetic and human-centred world along the way! 
\n\n
Everyone's on their own journey, and we all do a little better when we help each other out :)`

    /*const interestBodyList = `What drives me is the desire to:

- make low-friction tools and apps that make people’s lives easier 
- create the frameworks and systems that help the humans using them achieve their goals
- become the best version of myself 
- and do as much as I can to help build a more empathetic and human-centred world. 

Everyone's on their own journey, and we all do a little better when we help each other out :)`
*/

    return(
        <Section header={interestHeader} body={interestBody} />
    )
}



