import React, { Component } from 'react'
import Notification from './Notifications'
import Grid from '@material-ui/core/Grid';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

 
 class Dashboard extends Component {

 
  render() {
    const { projects , auth , notifications} = this.props

    if(!auth.uid) return <Redirect to='/signin' />

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <ProjectList projects={projects} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Notification notifications={notifications}  />
            </Grid>
        
      </Grid>
    )
  }
}

const mapStateToProps = (state) =>{
 
  return{
    projects : state.firestore.ordered.projects,
    auth : state.firebase.auth,
    notifications : state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect( [
    { collection : 'projects' ,  orderBy : [ 'createdAt' , 'desc' ]  },
    { collection : 'notifications' , limit : 3 , orderBy : [ 'time' , 'desc' ] }
  ] )
) (Dashboard)
