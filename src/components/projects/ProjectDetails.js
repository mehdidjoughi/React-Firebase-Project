import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const styles = {
    
    container: {
      padding :20
    }
  };

const ProjectDetails = (props) => {

    const {project , auth} = props
    if(!auth.uid) return <Redirect to='/signin' />
    if(project){
      return (
        <Grid container  style={styles.container}>
            <Grid item xs={12} sm={12}>
            <Typography variant="headline" component="h3" gutterBottom align="center">
               { project.title}
            </Typography>
    
             <Typography component="p">
              {project.content}
            </Typography>
    
         
             <Typography variant="caption">
             Posted by  {project.authorFirstName}  {project.authorLastName} 
            </Typography>
            <Typography variant="caption">
            {moment(project.createdAt.toDate()).calendar() }
            </Typography>
    
    
            </Grid>
        </Grid>
      )

    } else{

      return(
        <Grid container  style={styles.container}>
            <Grid item xs={12} sm={12}>
            <Typography variant="headline" component="h3" gutterBottom align="center">
              <CircularProgress align="center" />
            </Typography>
    
              
             </Grid>
        </Grid>
      )
      

    }
  
}

const mapSateToProps = (state , ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ?  projects[id] : null
  
  return{
    project : project,
    auth : state.firebase.auth
  }
}

export default compose(
  connect(mapSateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
  ) (ProjectDetails)
  
