import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '50vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    marginTop: '3%',
    paddingLeft: '28%',
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    fontSize: 30,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 900,
    fontFamily: "'Open Sans'",
  },
}));

export default useStyles;
