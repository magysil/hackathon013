import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BotonesBienestar from './botonesBienestar'
import ContenidoEstres from './contenidoEstres'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography
              style={{fontSize: '1.150rem',
              color:'#000000',
              fontWeight:'500'}}>
                <BotonesBienestar/>
            </Typography>

          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography
              style={{fontSize: '1.150rem',
              color:'#000000',
              fontWeight:'500'}}>
                Aprenda más sobre el estrés
            </Typography>
            <Typography style={{fontFamily: 'Arial, Helvetica, sans-serif' ,  margin: '8px'}}>
                El estrés tiene una gran influencia sobre el estado de ánimo, nuestra sensación de bienestar, comportamiento y salud. Aunque el estrés es inevitable, puede ser manejable.
            </Typography>
            <Typography>
              <ContenidoEstres/>
            </Typography>
          </Paper>
        </Grid>

      </Grid>

    </div>
  );
}




/*

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BotonesBienestar from './botonesBienestar'
import ContenidoEstres from './contenidoEstres'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography
              style={{fontSize: '1.150rem',
              color:'#000000',
              fontWeight:'500'}}>
                <BotonesBienestar/>
            </Typography>

          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography
              style={{fontSize: '1.150rem',
              color:'#000000',
              fontWeight:'500'}}>
                Aprenda más sobre el estrés
            </Typography>
            <Typography style={{fontFamily: 'Arial, Helvetica, sans-serif' ,  margin: '8px'}}>
                El estrés tiene una gran influencia sobre el estado de ánimo, nuestra sensación de bienestar, comportamiento y salud. Aunque el estrés es inevitable, puede ser manejable.
            </Typography>
            <Typography>
              <ContenidoEstres/>
            </Typography>
          </Paper>
        </Grid>

      </Grid>

    </div>
  );
}


*/



