import * as React from 'react';
import { Grid, Box, Typography, Avatar, Divider, Container } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import SearchProfile from './SearchProfile';
import StarRating from './StarRating';
import useStyles from './useStyles';

interface Props {
  firstName: string;
  lastName: string;
  address: string;
  description: string;
}

export default function ProfileList(): JSX.Element {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg">
      <Typography component="h1" variant="h3" className={classes.title}>
        Your search results
      </Typography>
      <SearchProfile />
      <Grid item xs={12} sm={3} spacing={2} className={classes.card}>
        <Avatar alt="Seye Onigbinde" src="/static/images/avatar/1.jpg" className={classes.avatar} />
        <Typography component="h3" variant="h6" className={classes.name}>
          Seye Onigbinde
          <Typography component="h6" className={classes.status}>
            Lovely Dog Sitter
          </Typography>
        </Typography>
        <Box>
          <StarRating />
        </Box>
        <Typography component="h6" className={classes.description}>
          Lorem ipsum dolor sit, amet consectetur
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
    </Container>
  );
}
