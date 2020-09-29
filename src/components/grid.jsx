import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography
            style={{fontSize: '1.150rem',
            color:'#000000',
            fontWeight:'500'}}>To Do/Por hacer</Typography>
          <Typography component='h6'
         style={{fontSize: '0.9rem',
         color:'#FFE600',
         fontWeight:'bold'}}>+ Agregar tareas</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>
        <Typography
            style={{fontSize: '1.150rem',
            color:'#000000',
            fontWeight:'500'}}>To Do/Por hacer</Typography>
          <Typography component='h6'
         style={{fontSize: '0.9rem',
         color:'#FFE600',
         fontWeight:'bold'}}>+ Agregar tareas</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>
        <Typography
            style={{fontSize: '1.150rem',
            color:'#000000',
            fontWeight:'500'}}>To Do/Por hacer</Typography>
          <Typography component='h6'
         style={{fontSize: '0.9rem',
         color:'#FFE600',
         fontWeight:'bold'}}>+ Agregar tareas</Typography>
          </Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}
