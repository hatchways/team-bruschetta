import * as React from 'react';
import { TextField, Grid, IconButton, InputAdornment, Container, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './useStyles';
import ProfileList from './ProfileList';
import profileListing from '../../../helpers/APICalls/profileListing';
import { ProfileLists } from '../../../interface/Profile';

export default function SearchProfile(): JSX.Element {
  const [profiles, setProfiles] = React.useState<any[]>([]);
  const [searchProfile, setSearchProfile] = React.useState('');
  const classes = useStyles();

  const profileList = async (
    firstName: string,
    lastName: string,
    address: string,
    description: string,
    availability: string,
    role: string,
    price: number,
  ) => await profileListing(firstName, lastName, address, description, availability, role, price);

  const filteredProfile = profiles.filter((profile) => {
    return (
      profile.address.toLowerCase().includes(searchProfile.toLowerCase()) ||
      profile.availability.toLowerCase().includes(searchProfile.toLowerCase())
    );
  });

  const handleProfileSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProfile(e.target.value);
  };

  return (
    <Container component="main" maxWidth="lg">
      <Typography component="h1" variant="h3" className={classes.title}>
        Your search results
      </Typography>
      <Grid container className={classes.search}>
        <Grid item xs={8} sm={4}>
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon style={{ color: 'Red' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="search"
            label="Search By Location"
            name="address"
            type="search"
            autoComplete="address"
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            id="search"
            name="availability"
            type="date"
            label="Drop in"
            autoComplete="availability"
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            id="search"
            name="availability"
            type="date"
            label="Drop off"
            autoComplete="availability"
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <ProfileList />
    </Container>
  );
}
