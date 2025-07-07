import React from "react";
import { Section } from "../components/Section";


export const Projects = () =>{

    const projectsHeader = `make projects`
    const projectsBody = `
- nook                              terminal ai wrapper (in progress)
- shelf                             Android / browser extension crossplat read-later widget (in progress)
- sanjaybudhia.dev (you are here)   this site (2025)
- pokemon fitness tracker           gamified fitness tracker (2025)
- CanIPlayIt                        game subscription database (2024)
- QOTDbot                           question of the day bot for discord (2021)

[see more](https://github.com/sanxbud)`
        


    return(
        <Section header={projectsBody} body={projectsBody} />
        
    )
}
