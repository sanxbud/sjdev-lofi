import { Section } from "../components/Section";


export const Toolbelt = () =>{

    const toolHeader = `toolbelt --list`
    const toolBody = `
languages:\t    typescript, go, javascript, java\n
frontend:\t\t   react, vite, next\n
backend:\t\t    sql, firebase, apex, express\n
tools:\t\t\t    git, linux, nvim, tmux, salesforce\n
tendencies:\t   long-form writing, shooting all sorts of trouble, obsessively optimizing\n`

    return(
        <Section header={toolHeader} body={toolBody} />
    )
}
