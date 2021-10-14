import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '55%', // Fix IE 11 issue.
    marginTop: theme.spacing(10),
    margin: '5% 30%',
    borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
  },
  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
    textTransform: 'uppercase',
  },
  inputs: {
    marginTop: '.8rem',
    height: '2rem',
    padding: '5px',
    width: '50%',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: '#931908',
    color: '#fff',
    fontWeight: 'bold',
  },
}));

export default useStyles;
