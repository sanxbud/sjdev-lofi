
import { Section } from "../components/Section";


export const Thoughts = () =>{

    const thoughtsHeader = `thoughts.log --tail`
    const thoughtsBody = `check out my writing on tech, people, and how the two interact [here](https://sanjaybudhia.dev/thoughts)`


    return(
        <Section header={thoughtsHeader} body={thoughtsBody} />
    )
}
