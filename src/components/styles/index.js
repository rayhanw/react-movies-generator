import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    container: {
      margin: theme.spacing(2)
    },
    input: {
      margin: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1)
    },
    largeTopSpacing: {
      marginTop: theme.spacing(5)
    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

export default useStyles;
