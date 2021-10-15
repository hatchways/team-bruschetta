import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: '3rem',
    boxShadow: '6px 4px 10px #ddd',
    padding: '3%',
    fontWeight: 'bold',
  },
  field: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    width: '20%',
    textTransform: 'uppercase',
    textAlign: 'right',
    marginRight: '5%',
  },
  gender: {
    width: '20%',
    textTransform: 'uppercase',
    marginLeft: '17%',
    marginRight: '11%',
    textAlign: 'right',
  },
  dob: {
    width: '17%',
    textTransform: 'uppercase',
    marginRight: '4%',
    textAlign: 'right',
  },
  textField: {
    marginTop: '1rem',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '40%',
  },
  phoneButton: {
    height: 56,
  },
  title: {
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight: 'bold',
  },
}));

export default useStyles;
