import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: '65vw',
      maxHeight: '65vh',
      minWidth: '50vw',
      minHeight: '55vh',
      margin: 8,
      marginLeft: '30%',
      position: 'absolute',
      top: '60%',
      right: '20%',
      boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.47)',
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: 26,
      textAlign: 'center',
      padding: 10,
      marginTop: '4%',
      fontWeight: 'bold',
    },
    uploadButton: {
      width: 'auto',
      maxWidth: '25%',
      maxHeight: '25%',
      minHeight: '45%',
      left: '40%',
    },
    info: {},
  }),
);

export default useStyles;
