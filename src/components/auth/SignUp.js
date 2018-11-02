import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class  SignUp extends React.Component {
  
    state = {
        email: '',
        password: '',
        firstName:'',
        lastName:''
      }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
      }

  render(){
    const { classes , auth  , authError} = this.props;
   
    if(auth.uid) return <Redirect to='/' />

    
    
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography variant="headline">Sign up</Typography>
          <form className={classes.form} onSubmit={this.handleSubmit} >
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input 
              onChange={this.handleChange}
              id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
              onChange={this.handleChange}
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">First Name</InputLabel>
              <Input
              onChange={this.handleChange}
                name="firstName"
                type="text"
                id="firstName"
                
              />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Last Name</InputLabel>
              <Input
              onChange={this.handleChange}
                name="lastName"
                type="text"
                id="lastName"
               
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
            {authError ? <div>  <br/> <Typography component="p" color="error" align="center"> {authError}</Typography> </div> : null }
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}
}
SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return{
    auth : state.firebase.auth,
    authError : state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp : (newUser) =>  dispatch(signUp(newUser)),

  }
}

export default compose (
  withStyles(styles),
  connect(mapStateToProps,mapDispatchToProps)
  )(SignUp);