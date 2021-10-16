import React from 'react';
import useStyles from './useStyles';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SideDraw = (): JSX.Element => {
  const classes = useStyles();
  const menuItems = ['Edit Profile', 'Profile Photo', 'Availability', 'Payment', 'Security', 'Settings'];

  const listMenuItems = (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return <div className={classes.root}>{listMenuItems}</div>;
};

export default SideDraw;
