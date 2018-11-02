import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
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
    }
  };

const SignedOutLinks = (props) => {
    const { classes } = props;
  return (
    <div>   
         <Hidden only={['xs', 'sm']}>
         <NavLink to='/Signup' style={styles.link}><Button color="inherit">Signup </Button></NavLink>
        <NavLink to='/Signin'><Button color="inherit" style={styles.link}>Login </Button></NavLink>
        </Hidden>
    
    </div>
  )
}

export default withStyles(styles)(SignedOutLinks)