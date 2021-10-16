import React from 'react';
import useStyles from './useStyles';
import logo from '../../Images/logos/logo.png';
import somepic from '../../Images/775db5e79c5294846949f1f55059b53317f51e30.png';
import { AppBar, Toolbar, ButtonGroup, Button, Avatar } from '@material-ui/core';

const NavBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
          <ButtonGroup variant="text" className={classes.buttonGroup} size="large" color="inherit">
            <Button style={{ border: 'none', fontSize: '1rem', fontWeight: 'bold' }}>My Jobs</Button>
            <Button style={{ fontSize: '1rem', fontWeight: 'bold' }}>Messages</Button>
          </ButtonGroup>
          <img src={somepic} alt="profile-pic" className={classes.profilepic} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
