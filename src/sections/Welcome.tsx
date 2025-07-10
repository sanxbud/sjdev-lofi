
import { Section } from "../components/Section";
                

export const Welcome = () =>{

    const welcomeHeader = `welcome.sh`
    const welcomeBody = `
Welcome to my site. I hope you're having a good day.  
If not, please click [here](https://emergencycompliment.com/) 💛
\n`
    
    

    return(
        <Section header={welcomeHeader} body={welcomeBody}/>

    )
}
