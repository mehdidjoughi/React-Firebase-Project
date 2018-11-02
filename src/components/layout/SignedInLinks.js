import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

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

const SignedInLinks = (props) => {
    const { classes } = props;
  return (
    <div>   
            <Hidden only={['xs', 'sm']}>
        <Button color="inherit"><NavLink to='/create'  style={styles.link} >New Project</NavLink> </Button>
       
        <NavLink to='/'  style={styles.link} ><Button color="inherit" onClick={props.signOut}>Log Out </Button></NavLink>
        <Button color="inherit"><Avatar className={classes.avatar}><NavLink to='/' style={styles.link}>{props.profile.initials}</NavLink> </Avatar> </Button>
        </Hidden>
    </div>
  )
}

const mapDispatchToProps = (disptach) =>{
  return{
    signOut : () => disptach(signOut()) 
  }
}

export default compose(
withStyles(styles),
connect(null,mapDispatchToProps)
)
(SignedInLinks)