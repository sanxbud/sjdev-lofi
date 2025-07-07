
import { Section } from "../components/Section";
                

export const Welcome = () =>{

    const welcomeHeader = `welcome.sh`
    const welcomeBody = `I'm a dev from Winnipeg with a background in computer science and history. I care about kindness, honesty, always improving, and always finding joy in whatever I'm doing\n`
    
    

    return(
        <Section header={welcomeHeader} body={welcomeBody}/>

    )
}
