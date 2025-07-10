import { Section } from "../components/Section";


export const Experience = () =>{

    const expHeader = `experience --summary`
    const expBody = `
BA History                                |    University of Manitoba         | 2016\n
BSc Computer Science                      |    University of Manitoba         | 2021\n 
Associate Full-Stack Developer            |    Traction on Demand             | 2021–22\n  
Full-Stack Engineer (System Specialist)   |    Salesforce                     | 2022–23\n
Full-Stack Engineer                       |    CanU (Youth & Edu. Nonprofit)  | 2024–\n
\n
[Download Resume](/files/SanjayBudhia_SoftwareEngineerResume.pdf)\n
`





    return(
        <Section header={expHeader} body={expBody} />
    )
}



