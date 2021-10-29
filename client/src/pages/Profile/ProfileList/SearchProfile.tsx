import * as React from 'react';
import { TextField, Grid, IconButton, InputAdornment, Container, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './useStyles';
import ProfileList from './ProfileList';
import { ProfileLists } from '../../../interface/Profile';
import { useAuth } from '../../../context/useAuthContext';
import profileListing from '../../../helpers/APICalls/profileListing';

export default function SearchProfile(): JSX.Element {
  const [searchProfile, setSearchProfile] = React.useState('');

  const classes = useStyles();
  const { profileList } = useAuth();
  console.log(profileList);

  const filteredProfile = profileList.filter((profile) => {
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
        <Grid item xs={6} sm={3}>
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
            onChange={handleProfileSearch}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            id="search"
            label="Search By Availability"
            name="availability"
            type="date"
            autoComplete="availability"
            className={classes.textField}
            variant="outlined"
            onChange={handleProfileSearch}
          />
        </Grid>
      </Grid>
      {filteredProfile.map((profile, i) => (
        <ProfileList key={i} profile={profile} />
      ))}
    </Container>
  );
}
