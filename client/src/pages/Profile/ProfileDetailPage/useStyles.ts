import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';
import profileDetailImage from '../../../Images/profile_detail_bg.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2rem',
  },
  profile: {
    width: '65%',
    borderRadius: '10px',
  },
  profileBgImage: {
    backgroundImage: `url(${profileDetailImage})`,
    height: '40vh',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px',
  },
  avatar: {
    width: '15%',
    height: '30vh',
    position: 'absolute',
    left: '23rem',
    top: '13rem',
    border: '10px solid #fff',
  },
  details: {
    marginTop: '8rem',
    marginLeft: '20rem',
  },
  name: {
    marginLeft: '1.2rem',
    fontWeight: 'bolder',
    fontSize: '2rem',
  },
  status: {
    fontSize: '0.8rem',
    color: '#aaa',
    marginLeft: '4rem',
  },
  locationLogo: {
    color: 'Red',
  },
  location: {
    fontSize: '0.8rem',
    color: '#aaa',
    marginTop: '0.5rem',
    marginLeft: '3rem',
  },
  description: {
    marginTop: '4rem',
  },
  aboutTitle: {
    fontWeight: 'bolder',
    paddingLeft: '2rem',
  },
  about: {
    fontSize: '0.9rem',
    lineHeight: '2',
    padding: '0 3rem 2rem 2rem',
  },
  petName: {
    padding: '0 3rem 2rem 2rem',
  },
  petItems: {
    paddingRight: '2rem',
    width: '20%',
    Height: '15vh',
  },
  request: {
    width: '20%',
  },
}));

export default useStyles;
