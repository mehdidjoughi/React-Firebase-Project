import React from 'react';
// ---------------  For Ui ----------------------------------
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import { Redirect } from 'react-router-dom'
// ---------------  For Redux ----------------------------------
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/ProjectActions'

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
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

class  CreateProject extends React.Component {
  
    state = {
        title: '',
        content: '',
      
      }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
        this.props.history.push('/')
      }

  render(){
    const { classes , auth} = this.props;

    if(!auth.uid) return <Redirect to='/signin' />
    
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          
          <Typography variant="headline">Create new project</Typography>
          <form className={classes.form} onSubmit={this.handleSubmit} >
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="title">Title</InputLabel>
              <Input 
              onChange={this.handleChange}
              value={this.state.title}
              id="title" name="title" autoComplete="text" autoFocus />
            </FormControl>
           
              <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="content">Project content</InputLabel>
              <Input
              onChange={this.handleChange}
                name="content"
                type="text"
                id="content"
                value={this.state.content}
              />
              </FormControl>
            
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className={classes.submit}
            >
              Create
            </Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}
}
CreateProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps   = dispatch =>{

  return{
    createProject :  (project) => dispatch(createProject(project))

  }
}

const mapStateToProps = (state) =>{
 
  return{
   
    auth : state.firebase.auth
  }
}

export default connect(mapStateToProps , mapDispatchToProps) (withStyles(styles)(CreateProject));