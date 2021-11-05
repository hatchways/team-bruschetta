import { makeStyles } from '@material-ui/core/styles';
import homepageImage from '../../../src/Images/home_bg.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: '10rem',
    fontSize: '3.5rem',
    fontWeight: 'bold',
    paddingRight: '6rem',
  },
  profile: {
    paddingLeft: '6rem',
  },
  homeBgImage: {
    backgroundImage: `url(${homepageImage})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  location: {
    marginTop: '1rem',
    width: '50%',
  },
  textField: {
    marginTop: '1rem',
    width: '100%',
  },
  availability: {
    display: 'flex',
  },
  inputLabel: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginTop: '2rem ',
    color: '#000',
  },
}));

export default useStyles;
