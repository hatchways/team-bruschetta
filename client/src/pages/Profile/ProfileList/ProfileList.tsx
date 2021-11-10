import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import ProfileCard from './ProfileCard';

import useStyles from './useStyles';

export default function ProfileList(): JSX.Element {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
      <Link to="/dashboard/profile-detail" className={classes.link}>
        <ProfileCard />
      </Link>
    </Box>
  );
}
