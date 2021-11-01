import * as React from 'react';
import { Box, Typography, Divider, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
import avatar from '../../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';

import useStyles from './useStyles';

interface Props {
  profiles: {
    firstName: string;
    lastName: string;
    address: string;
    description: string;
    availability: string;
    price: number;
    role: string;
  };
}

const initialValues = {
  status: 'Lovely Dog Sitter',
};
export default function ProfileList({ profiles }: Props): JSX.Element {
  const [value, setValue] = React.useState(3);
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component="img" alt="Seye Onigbinde" src={avatar} className={classes.media} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.name}>
              {profiles.firstName} {profiles.lastName}
              <Typography component="h6" className={classes.status}>
                {initialValues.status}
              </Typography>
            </Typography>
            <Box component="fieldset" mb={1} className={classes.rating}>
              <Rating name="read-only" value={value} readOnly />
            </Box>
            <Typography variant="body2" color="textSecondary">
              {profiles.description}
            </Typography>
          </CardContent>
          <Divider />
        </CardActionArea>
        <Box className={classes.footer}>
          <Box>
            <Typography component="h6" className={classes.footerText}>
              <LocationOnIcon className={classes.locationLogo} />
              {profiles.address}
            </Typography>
          </Box>
          <Box>
            <Typography component="h6" className={classes.footerText2}>
              ${profiles.price}/hr
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
