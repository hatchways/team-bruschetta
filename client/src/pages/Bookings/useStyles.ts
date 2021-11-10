import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
  },
  container: {
    marginLeft: '5%',
  },
  nextBooking: {
    width: '75%',
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
    width: '45%',
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
  bookings: {
    width: '75%',
    paddingBottom: '2rem',
  },
  bookingCard: {
    width: '90%',
    borderRadius: '10px',
    marginLeft: '5%',
    marginBottom: '5%',
  },
  mainBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  accepted: {
    paddingRight: '5%',
  },
  button: {
    color: '#aaa',
  },
  calendar: {
    color: 'red',
    width: '20%',
    height: '50vh',
    padding: '3rem',
  },
}));

export default useStyles;
