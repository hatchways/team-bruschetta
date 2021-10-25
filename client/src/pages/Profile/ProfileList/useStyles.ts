import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '2rem 30rem',
    fontWeight: 'bold',
  },
  card: {
    width: '20%',
    height: '35vh',
    margin: '2rem 0',
    boxShadow: '5px 5px 5px 5px #ddd',
    padding: '2%',
    alignItems: 'center',
  },
  textField: {
    marginTop: '1rem',
    width: '100%',
  },
  name: {
    marginLeft: '2.7rem',
    fontWeight: 'bolder',
  },
  avatar: {
    width: '45%',
    height: '11vh',
    marginBottom: '0.5rem',
    marginLeft: '3rem',
  },
  description: {
    marginTop: '2rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    fontSize: '0.7rem',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0.4rem',
  },
  footerText: {
    fontSize: '0.7rem',
    fontWeight: 'bold',
    color: '#aaa',
  },
  locationLogo: {
    color: 'Red',
  },
  footerText2: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    paddingTop: '0.5rem',
  },
}));

export default useStyles;
