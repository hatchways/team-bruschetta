import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '1rem 30rem',
    fontWeight: 'bolder',
    fontSize: '2rem',
    width: '40%',
  },
  card: {
    width: '20%',
    height: '38vh',
    margin: '2rem 0',
    boxShadow: '5px 5px 5px 5px #ddd',
    padding: '2%',
    alignItems: 'center',
  },
  textField: {
    marginTop: '1rem',
    width: '100%',
  },
  search: {
    marginLeft: '18rem',
  },
  name: {
    marginLeft: '2.7rem',
    fontWeight: 'bolder',
  },
  status: {
    fontSize: '0.7rem',
    color: '#bbb',
  },
  avatar: {
    width: '45%',
    height: '11vh',
    marginBottom: '0.5rem',
    marginLeft: '3rem',
  },
  description: {
    marginTop: '0.3rem',
    marginBottom: '0.7rem',
    textAlign: 'center',
    fontSize: '0.7rem',
  },
  rating: {
    marginLeft: '1.8rem',
    borderColor: 'transparent',
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
