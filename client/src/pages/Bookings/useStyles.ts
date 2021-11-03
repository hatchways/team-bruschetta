import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2rem',
  },
  container: {
    marginLeft: '10%',
  },
  nextBooking: {
    width: '65%',
    borderRadius: '10px',
    marginBottom: '5%',
  },
  cardHead: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '3% 5% 4% 5%',
  },
  headers: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '0.8rem',
  },
  date: {
    paddingLeft: '5%',
    fontSize: '1.1rem',
  },
  nameBox: {
    width: '42%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%',
  },
  name: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
  profile: {
    width: '65%',
    borderRadius: '10px',
  },
  bookingCard: {
    width: '85%',
    borderRadius: '10px',
    marginLeft: '5%',
    marginBottom: '5%',
  },
  nameBox2: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%',
  },
  settingsIcon: {
    color: '#bbb',
  },
}));

export default useStyles;
