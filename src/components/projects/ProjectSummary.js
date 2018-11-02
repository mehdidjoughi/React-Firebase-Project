import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
const styles = {
    
    paper: {
      margin: 4,
      padding :10
    }
  };
const ProjectSummary = ({project}) => {
 
  return (
    <div>
       <Paper  elevation={1} style={styles.paper}>
        <Typography variant="headline" component="h3">
          {project.title}
        </Typography>
        <Typography component="p">
          Posted by {project.authorFirstName} {project.authorLastName}
        </Typography>
        <Typography variant="caption">
        {moment(project.createdAt.toDate()).calendar() }
        </Typography>
      </Paper>
    </div>
  )
}

export default ProjectSummary
