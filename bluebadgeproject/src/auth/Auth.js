import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './Auth.css';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));


//Imported some grids from materials ui.

const Auth = (props) => { 
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

  return(
    
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid  item>
              <Login className={login} updateToken={props.updateToken}/>



            </Grid>
            <Grid  item>
            <Signup className={signup} updateToken={props.updateToken} />



            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  
}

export default Auth;