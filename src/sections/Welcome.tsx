
import { Section } from "../components/Section";
                

export const Welcome = () =>{

    const welcomeHeader = `welcome.sh`
    const welcomeBody = `
Welcome to my site. I hope you're having a good day.  
If not, please click [here](https://www.youtube.com/watch?v=tVj0ZTS4WF4) 💛
\n`
    
    

    return(
        <Section header={welcomeHeader} body={welcomeBody}/>

    )
}
