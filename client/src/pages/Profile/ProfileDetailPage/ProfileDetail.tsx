import * as React from 'react';
import 'date-fns';
import Paper from '@material-ui/core/Paper';
import { Button, TextField, Grid, Box, Typography, Container, Avatar, InputLabel } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import avatar from '../../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';
import dog_1 from '../../../Images/dog_1.jpeg';
import dog_2 from '../../../Images/dog_2.jpeg';

import useStyles from './useStyles';

const theme = createMuiTheme();

export default function ProfileDetail(): JSX.Element {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg" className={classes.root}>
        <Grid item xs={12} sm={8} elevation={6} component={Paper} spacing={3} square className={classes.profile}>
          <Box className={classes.profileBgImage}>
            <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
          </Box>
          <Box className={classes.details}>
            <Typography className={classes.name}>Andela Morales</Typography>
            <Typography className={classes.status}>Lovely pet sitter</Typography>
            <Typography className={classes.location}>
              <LocationOnIcon className={classes.locationLogo} />
              Toronto Ontario
            </Typography>
          </Box>
          <Box className={classes.description}>
            <Typography className={classes.aboutTitle}>About Me</Typography>
            <Typography className={classes.about}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse maxime voluptatibus veniam officiis
              laboriosam asperiores repellendus quasi. Corporis, molestias dignissimos. Ipsa, aut et. Debitis aut
              recusandae exercitationem quia voluptas. Provident porro expedita aperiam aspernatur non enim, eius ipsum
            </Typography>
          </Box>
          <Box className={classes.petName}>
            <img alt="dog" src={dog_1} className={classes.petItems} />
            <img alt="dog" src={dog_2} className={classes.petItems} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.request} spacing={3}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, omnis nobis autem, aut dolorem rerum
          impedit et atque eligendi architecto numquam, doloribus eaque labore veritatis veniam temporibus nihil qui
          nesciunt.
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
