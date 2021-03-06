import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    paddingLeft: '9%',
  },
  textField: {
    marginTop: '5%',
  },
  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
  },
  inputLabel: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  inputs: {
    marginTop: '.8rem',
    height: '2rem',
    padding: '5px',
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
    marginTop: 29,
    fontSize: 16,
    fontWeight: 'bold',
  },
}));

export default useStyles;
