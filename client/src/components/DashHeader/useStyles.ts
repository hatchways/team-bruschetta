import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dashHeader: {
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    paddingTop: '0.5rem',
    paddingBottom: '2rem',
  },
  logo: {
    width: '100%',
    paddingLeft: '2rem',
  },
  links: {
    width: '25%',
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
    cursor: 'pointer',
  },
}));

export default useStyles;
