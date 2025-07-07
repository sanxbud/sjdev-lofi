import React from "react";
import { Section } from "../components/Section";


export const Contact = () =>{

    const contactHeader = `contact --list`
    const contactBody = `
email:    [snpbudhia](mailto:snpbudhia@gmail.com)
github:   [sanxbud](https://github.com/sanxbud)
linkedin: [Sanjay Budhia](https://linkedin.com/sanjaybudhia)
status:   looking for work, open to collab, feedback, or any interesting ideas you want to share!`


    return(
        <Section header={contactHeader} body={contactBody} />
    )
}








