import * as React from 'react';
import { Grid, Box, Typography, Avatar, Divider, Container } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import StarRating from './StarRating';
import useStyles from './useStyles';

interface Props {
  profile: {
    firstName: string;
    lastName: string;
    address: string;
    description: string;
    availability: `{}`;
  };
}
export default function ProfileList({ profile }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={3} spacing={2} className={classes.card}>
      <Avatar alt="Seye Onigbinde" src="/static/images/avatar/1.jpg" className={classes.avatar} />
      <Typography component="h3" variant="h6" className={classes.name}>
        {profile.firstName} {profile.lastName}
        <Typography component="h6" className={classes.status}>
          Lovely Dog Sitter
        </Typography>
      </Typography>
      <Box>
        <StarRating />
      </Box>
      <Typography component="h6" className={classes.description}>
        {profile.description}
      </Typography>
      <Divider />
      <Box className={classes.footer}>
        <Box>
          <Typography component="h6" className={classes.footerText}>
            <LocationOnIcon className={classes.locationLogo} />
            Toronto Ontario
          </Typography>
        </Box>
        <Box>
          <Typography component="h6" className={classes.footerText2}>
            $14/hr
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
