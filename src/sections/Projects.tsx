
import { Section } from "../components/Section";


export const Projects = () =>{

    const projectsHeader = `make projects`
    const projectsBody = `
 nook                               terminal ai wrapper 
 &nbsp;                                  \[Go, Python\] (in progress)\n\n
 shelf                              Android/Browser extension cross-sync app 
 &nbsp;                                  (in progress)\n
 [sanjaybudhia.dev](https://sanjaybudhia.dev)                   this site - YOU ARE HERE
 &nbsp;                                  \[React, TypeScript\] (2025)\n\n
 [pokemon fitness tracker](http://pokemonfitnesstracker.netlify.com)            gamified fitness tracker 
 &nbsp;                                  \[React, JavaScript, Google Sheet API\] (2025)\n\n
 [CanIPlayIt](https://github.com/sanxbud/caniplayit)                         game subscription database 
 &nbsp;                                  \[React, JavaScript, Express, SQL, AWS\] (2024)\n\n
 QOTDbot                            discord question of the day bot 
 &nbsp;                                  \[Node, Javascript, Bash\] (2021)\n\n
\n
[see more](https://github.com/sanxbud)\n
`
        


    return(
        <Section header={projectsHeader} body={projectsBody} />
        
    )
}
