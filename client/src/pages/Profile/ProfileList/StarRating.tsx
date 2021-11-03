import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import useStyles from './useStyles';

export default function StarRating() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  return (
    <Box component="fieldset" mb={1} className={classes.rating}>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}
