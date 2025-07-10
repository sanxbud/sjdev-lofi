import { Section } from "../components/Section";


export const Toolbelt = () =>{

    const toolHeader = `toolbelt --list`
    const toolBody = `

languages:       typescript, javascript, go, python, java, sql
frameworks:      react, vite, flask, express, apex
platforms/tools: git, linux, tmux, nvim, firebase, salesforce, rest APIs
\n`


    return(
        <Section header={toolHeader} body={toolBody} />
    )
}
