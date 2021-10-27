import * as React from 'react';
import {
  Grid,
  Box,
  Typography,
  Avatar,
  Divider,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
import avatar from '../../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';

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
  const [value, setValue] = React.useState(2);
  const classes = useStyles();

  const styles = {
    media: {
      width: '40%',
      height: '12vh',
      marginBottom: '0.5rem',
      marginLeft: '5rem',
      borderRadius: '50%',
    },
  };

  const initialValues = {
    firstName: 'Seye',
    lastName: 'Onigbinde',
    status: 'Lovely Dog Sitter',
    description: 'Lorem ipsum dolor sit, amet consectetur',
    address: 'Toronto Ontario',
    price: '$14/hr',
  };

  return (
    <Container component="main" maxWidth="lg">
      <Typography component="h1" variant="h3" className={classes.title}>
        Your search results
      </Typography>
      <SearchProfile />
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component="img" alt="Seye Onigbinde" src={avatar} style={styles.media} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.name}>
              {initialValues.firstName} {initialValues.lastName}
              <Typography component="h6" className={classes.status}>
                {initialValues.status}
              </Typography>
            </Typography>
            <Box component="fieldset" mb={1} className={classes.rating}>
              <Rating name="read-only" value={value} readOnly />
            </Box>
            <Typography variant="body2" color="textSecondary">
              {initialValues.description}
            </Typography>
          </CardContent>
          <Divider />
        </CardActionArea>
        <CardActions>
          <Box className={classes.footer}>
            <Box>
              <Typography component="h6" className={classes.footerText}>
                <LocationOnIcon className={classes.locationLogo} />
                {initialValues.address}
              </Typography>
            </Box>
            <Box>
              <Typography component="h6" className={classes.footerText2}>
                {initialValues.price}
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Container>
  );
}
