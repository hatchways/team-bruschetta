import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '820px',
      [theme.breakpoints.down('sm')]: {
        width: '300px',
        marginTop: '90%',
        top: '21%',
        left: '49%',
        zIndex: '1',
      },
      [theme.breakpoints.up('sm')]: {
        marginTop: '40%',
        width: '450px',
      },
      [theme.breakpoints.up('md')]: {
        marginTop: '20%',
        top: '32%',
        width: '700px',
      },
      height: '570px',
      margin: 8,
      transform: 'translate(-50%,-50%)',
      position: 'absolute',
      marginTop: '26%',
      // top: '80%',
      left: '50%',
      transition: theme.transitions.create('transform'),
      boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.47)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '5px',
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        left: '21%',
      },
      [theme.breakpoints.up('sm')]: {
        left: '32%',
      },
      [theme.breakpoints.up('md')]: {
        left: '40%',
      },
      position: 'absolute',
      fontSize: 26,
      textAlign: 'center',
      padding: 10,
      top: '7%',
      left: '42%',
      fontWeight: 'bold',
    },
    avatar: {
      [theme.breakpoints.up('md')]: {
        left: '52%',
      },
      transform: 'translate(-50%,-50%)',
      position: 'absolute',
      top: '37%',
      left: '52%',
      transition: theme.transitions.create('transform'),
      height: '130px',
      width: '130px',
      objectFit: 'cover',
    },
    info: {
      [theme.breakpoints.down('sm')]: {
        left: '21%',
      },
      [theme.breakpoints.up('sm')]: {
        left: '32%',
      },
      [theme.breakpoints.up('md')]: {
        left: '40%',
      },
      position: 'absolute',
      top: '52%',
      left: '42%',
      width: '190px',
      textAlign: 'center',
    },
    uploadButton: {
      [theme.breakpoints.down('sm')]: {
        left: '16%',
      },
      [theme.breakpoints.up('sm')]: {
        left: '28%',
      },
      [theme.breakpoints.up('md')]: {
        left: '35%',
      },
      position: 'absolute',
      top: '65%',
      left: '40%',
      padding: '25px',
      maxWidth: '280px',
      maxHeight: '50px',
      textAlign: 'center',
      border: '1.98px solid red',
    },
    deleteIcon: {
      [theme.breakpoints.down('sm')]: {
        left: '35%',
      },
      [theme.breakpoints.up('sm')]: {
        left: '41%',
      },
      [theme.breakpoints.up('md')]: {
        left: '43%',
      },
      position: 'absolute',
      top: '80%',
      left: '45%',
    },
  }),
);

export default useStyles;
