import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    margin: '3rem 0',
    boxShadow: '6px 4px 10px #ddd',
    padding: '3%',
  },
  title: {
    margin: '2rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    fontWeight: 700,
  },
  gender: {
    width: '20%',
    textTransform: 'uppercase',
    marginLeft: '17%',
    marginRight: '12%',
    textAlign: 'right',
    fontWeight: 700,
  },
  dob: {
    width: '17%',
    textTransform: 'uppercase',
    marginRight: '4%',
    textAlign: 'right',
    fontWeight: 700,
  },
  textField: {
    marginTop: '1rem',
  },
  textArea: {
    width: '100%',
    borderColor: '#ccc',
    paddingLeft: '1rem',
    paddingTop: '1rem',
    fontFamily: 'Roboto',
    fontSize: '1rem',
  },
  dropdown: {
    marginTop: '1rem',
  },
  select: {
    marginRight: '3rem',
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
}));

export default useStyles;
