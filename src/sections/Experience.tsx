import { Section } from "../components/Section";
import { InfoTable } from "../components/InfoTable";


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


  const columns = ['name','org','year']
  const expArray =[ 
    ["BA History","University of Manitoba","2016"],
    ["BSc Computer Science","University of Manitoba","2021"],
    ["Associate Full-Stack Developer","Traction on Demand","2021–22"],
["Full-Stack Engineer (System Specialist)", "Salesforce", "2022–23" ],
    ["Full-Stack Engineer", "CanU (Youth & Edu. Nonprofit)",  "2024–"]   
  ]

  // temp: tooltips to come

  const rows = expArray.map(row=>({
    tooltip:'',
    values:row
  }))
  const expInfo = InfoTable({columns,rows,showHeaders: false})
 


    return(
        <Section header={expHeader} body={expInfo} />
    )
}



