import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {  signedOutList} from '../../data/tiledata';
import  signedInList  from '../../data/tiledata';
import {connect} from 'react-redux'
import { compose } from 'redux'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class ButtonAppBar extends React.Component {

  state = {
    left: false,    
  };
  
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render(){

    const { classes , auth , profile} = this.props;
    console.log(this.props)

    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks/>
    const sidelinks = auth.uid ? <signedInList/>: signedOutList

    const sideList = (
      <div className={classes.list}>
        {sidelinks}
      </div>
    );

 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={['xl', 'lg' ,'md'  ]}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.toggleDrawer('left', true)} />
          </IconButton>
          </Hidden>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Mehdi Djo
          </Typography>
           {links}
        </Toolbar>
      </AppBar>
      <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
    </div>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state)
  return{
    auth : state.firebase.auth,
    profile : state.firebase.profile
  }
}

export default compose (
  withStyles(styles),
  connect(mapStateToProps)
  )
(ButtonAppBar);
