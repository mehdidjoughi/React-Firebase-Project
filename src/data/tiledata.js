// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import { NavLink } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { Divider } from '@material-ui/core';
import {connect} from 'react-redux'
import { signOut } from '../store/actions/authActions'

const styles = {
  avatar: {
    margin: 10,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  link :{
    textDecoration: 'none' ,
    color : "white"
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
 
};

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);
 
 const signedInList =(props) =>{
 
 return(

  <div>
     <NavLink to='/'  style={styles.link} >
      <ListItem button>
      <Avatar style={styles.purpleAvatar}>OP</Avatar>
        <ListItemText primary="NN" />
      </ListItem>
    </NavLink>


    <Divider/>

    <NavLink to='/create'  style={styles.link} >
      <ListItem button>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary="Create Project" />
      </ListItem>
    </NavLink>

    
    <NavLink to='/'  style={styles.link} >
      <ListItem button>
        
        <ListItemText primary="Log Out" onClick={props.signOut} />
      </ListItem>
    </NavLink>


   
  </div>
)}
const mapDispatchToProps = (disptach) => {
  return{
    signOut : () => disptach(signOut())
  }
}
export default connect(null,mapDispatchToProps) (signedInList)


export const signedOutList = (
  <div>
    <NavLink to='/signup'  style={styles.link} >
      <ListItem button>
       
        <ListItemText primary="Signup" />
      </ListItem>
    </NavLink>

    <NavLink to='/signin'  style={styles.link} >
      <ListItem button>
       
        <ListItemText primary="Login" />
      </ListItem>
    </NavLink>

  </div>
);