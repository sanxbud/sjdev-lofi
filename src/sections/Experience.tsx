import React from "react";
import { Section } from "../components/Section";


export const Experience = () =>{

    const expHeader = `experience --summary`
    const expBody = `
BA History                                |    University of Manitoba                 | 2016
BSc Computer Science                      |    University of Manitoba                 | 2021
Associate Full-Stack Developer            |    Traction on Demand                     | 2021–22
Full-Stack Engineer (System Specialist)   |    Salesforce                             | 2022–23
Full-Stack Engineer                       |    CanU (Youth & Education Nonprofit)     | 2024–

[Download Resume](resumelink)`





    return(
        <Section header={expHeader} body={expBody} />
    )
}



