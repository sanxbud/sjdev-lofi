
import { InfoTable } from "../components/InfoTable";
import { Section } from "../components/Section";


export const Projects = () =>{

    const projectsHeader = `make projects`
    const projectsBody = `
 nook                               terminal ai wrapper 
 &nbsp;                                  \[Go, Python\] (in progress)\n\n
 index                              Symlink-based archival media organizer
 &nbsp;                                  \[Go, TUI/GUI in progress\] (2025)
 
[emergencycompliments.com](https://emergencycompliments.com)           Random compliment generator 
 &nbsp;                                  \[Tailwind, TypeScript\] (2025)\n
 [sanjaybudhia.dev](https://sanjaybudhia.dev)                   this site - YOU ARE HERE
 &nbsp;                                  \[React, TypeScript\] (2025)\n\n
 [pokemon fitness tracker](http://pokemonfitnesstracker.netlify.com)            gamified fitness tracker 
 &nbsp;                                  \[React, JavaScript, Google Sheet API\] (2025)\n\n
 [CanIPlayIt](https://github.com/sanxbud/caniplayit)                         game subscription aggregate db and search service
 &nbsp;                                  \[React, JavaScript, Express, SQL, AWS\] (2024)\n\n
 QOTDbot                            discord question of the day bot 
 &nbsp;                                  \[Node, Javascript, Discord API, Bash\] (2021)\n\n
 conversionBot                      discord bot for converting common units, 1500+ users ongoing 
 &nbsp;                                  \[Typescript, Discord API\] (2021) \n\n
 wikiGrab                           discord interface for navigating and importing wikia 
 &nbsp;                                  \[Python, Discord API, MediaWiki API\] (2021)\n\n
\n
[see more](https://github.com/sanxbud)\n
`
        
  const projCol = ['name', 'description', 'tech + year']

  const projRows= [
    {
      tooltip: '',
      values: [
        'nook',
        'terminal ai wrapper',
        '[Go, Python] (in progress)',
      ]
    },
    {
      tooltip: '',
      values: [
        'index',
        'symlink-based archival media organizer',
        '[Go CLI, TUI/GUI in progress] (2025)',
      ]
    },
    {
      tooltip: '',
      values: [
        <a href="https://emergencycompliments.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300">
          emergencycompliments.com
        </a>,
        'random compliment generator',
        '[Tailwind, TypeScript] (2025)',
      ]
    },
    {
      tooltip: '',
      values: [
        <a href="https://sanjaybudhia.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300">
         sanjaybudhia.dev
        </a>,
        'this site – YOU ARE HERE',
        '[React, TypeScript] (2025)',
      ]
    },
    {
      tooltip: '',
      values: [
        <a href="http://pokemonfitnesstracker.netlify.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300">
          pokemon fitness tracker
        </a>,
        'gamified fitness tracker',
        '[React, JavaScript, Google Sheet API] (2025)',
      ]
    },
    {
      tooltip: '',
      values: [
        <a href="https://github.com/sanxbud/caniplayit" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300">
          CanIPlayIt
        </a>,
        'game subscription aggregator + search service',
        '[React, JavaScript, Express, SQL, AWS] (2024)',
      ]
    },
    {
      tooltip: '',
      values: [
        'QOTDbot',
        'discord question of the day bot',
        '[Node, JavaScript, Discord API, Bash] (2021)',
      ]
    },
    {
      tooltip: '',
      values: [
        'conversionBot',
        'unit converter discord bot — 1500+ users',
        '[TypeScript, Discord API] (2021)',
      ]
    },
    {
      tooltip: '',
      values: [
        'wikiGrab',
        'discord interface for navigating + importing wikia',
        '[Python, Discord API, MediaWiki API] (2021)',
      ]
    },
  ]


  const projTable = InfoTable({columns:projCol,rows:projRows,showHeaders:false})

    return(
        <Section header={projectsHeader} body={projTable} />
        
    )
}
