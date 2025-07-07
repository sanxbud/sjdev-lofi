import React from "react";
import { Section } from "../components/Section";


export const Thoughts = () =>{

    const thoughtsHeader = `cat thoughts | more`
    const thoughtsBody = `check out my writing on tech, people, and how the two interact [here](https://sanjaybudhia.dev/thoughts)`


    return(
        <Section header={thoughtsHeader} body={thoughtsBody} />
    )
}
