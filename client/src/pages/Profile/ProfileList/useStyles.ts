import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    paddingTop: '1rem',
    paddingLeft: '20rem',
    fontWeight: 'bolder',
    fontSize: '2rem',
    width: '40%',
  },
  link: {
    textDecoration: 'none',
  },
  card: {
    width: '100%',
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
    paddingLeft: '10rem',
  },
  name: {
    marginLeft: '2.5rem',
    fontWeight: 'bolder',
  },
  status: {
    fontSize: '0.7rem',
    color: '#bbb',
    marginLeft: '2rem',
  },
  avatar: {
    width: '45%',
    height: '11vh',
    marginBottom: '0.5rem',
    marginLeft: '1rem',
  },
  rating: {
    marginLeft: '1.8rem',
    borderColor: 'transparent',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
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
