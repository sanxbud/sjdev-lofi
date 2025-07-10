
import { Section } from "../components/Section";
                

export const Whois = () =>{

    const welcomeHeader = `whois Sanjay`
    const welcomeBody = `Hey, I’m a developer from Winnipeg with a background in computer science and history. I care about kindness, honesty, always improving, and always finding joy in whatever I’m doing :)


Right now, I'm focused on writing (blog coming soon!), doing some research on AI, and upping my Go game with a couple apps and tools I have in development. 

Professionally, I'm working with CanU Canada, a youth nonprofit here in Winnipeg focused on helping newcomer youth see their post-secondary potential. I also help run LoseItChallenges, a seasonal fitness and weight loss community. `
    

    return(
        <Section header={welcomeHeader} body={welcomeBody}/>

    )
}
