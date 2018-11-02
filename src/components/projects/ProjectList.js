import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

const styles = {
    
    paper: {
      margin: 20,
      padding :20
    },
    link :{
      textDecoration: 'none' ,
      color : "white"
    }
  };


const ProjectList = ({projects}) => {
  return (
    <div>
       {
         projects && projects.map( project =>{
           return(
             <Link style={styles.link} to={'/project/'+project.id }  key={project.id} >
               <ProjectSummary project={project} />
             </Link>
           )
         })
       }
    </div>
  )
}

export default ProjectList
