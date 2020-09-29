import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>

        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h4" component="h1" style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight:'bold', marginTop:'20px'}}>
              Proyecto BIC</Typography>
        <Typography style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>Implementación App Banco Intercontinental</Typography>
              
            </Grid>
            <Grid item>
            <Button style={{ textTransform: "none", color: "#808080" }}>
    Todos los proyectos
  </Button>
  <Button style={{ textTransform: "none" }}>
    <Link
      underline="always"
      style={{
        textDecoration: "none",
        color: "#131313",
        borderBottom: "2px solid #FFE600",
      }}
    >
      Proyecto principal
    </Link>
  </Button>
  <Button style={{ textTransform: "none", color: "#808080" }}>
    Configurar proyectos
  </Button>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Toolbar>
        </Grid>
      </Grid>
    </div>
  );
}


