import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  logo: {
    width: '15%',
  },
  buttons: {
    width: '40%',
    display: 'flex',
    alignSelf: 'flex-end',
  },
  accAside: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 35,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
    textTransform: 'uppercase',
    textDecoration: 'underline',
  },
  link: { textDecoration: 'none' },
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    boxShadow: 'none',
    marginRight: 35,
    textTransform: 'uppercase',
    fontSize: 14,
  },
}));

export default useStyles;
