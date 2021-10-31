import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Grid, IconButton, InputAdornment, Container, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './useStyles';
import ProfileCard from './ProfileCard';
import { SitterProfile } from '../../../interface/Profile';

export default function SearchProfile(): JSX.Element {
  const [profileList, setProfileList] = React.useState<SitterProfile[] | null | undefined>([]);
  const classes = useStyles();

  const history = useHistory();

  React.useEffect(() => {
    const url = '/profiles';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProfileList(json);
        history.push('/profile-card');
      } catch (error) {
        setProfileList(undefined);
      }
    };

    fetchData();
  }, [history]);

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
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            id="search"
            name="availability"
            type="date"
            autoComplete="availability"
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
      </Grid>
      {profileList.map((profiles: SitterProfile, _id: number) => (
        <ProfileCard key={_id} profiles={profiles} />
      ))}
    </Container>
  );
}
