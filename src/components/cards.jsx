import React from "react";
import { Grid, makeStyles, Box, withWidth } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import Avatar from "./avatar";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const estilos = makeStyles((theme) => ({
  fondo: {
    background: theme.palette.secondary,
  },
}));

const Columnas = (props) => {
  const classes = estilos();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10} md={4} lg={3} className={classes.fondo}>
          <Card className={classes.root}>
            <CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="'#002884'"
                  href="#contained-buttons"
                >
                  IOS
                </Button>
              </CardActions>
              <Typography className={classes.pos} color="textSecondary">
                Configuring azure active
              </Typography>
              <Typography variant="body2" component="p">
                Directory documentation
                <br />
              </Typography>
              <Avatar></Avatar>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10} md={4} lg={3} className={classes.fondo}>
          <Card className={classes.root}>
            <CardContent>
            <CardActions>
            <Button
                  variant="contained"
                  color="'#002884'"
                  href="#contained-buttons"
                >
                  IOS
                </Button>
            </CardActions>
            <Typography className={classes.pos} color="textSecondary">
                Configuring azure active
              </Typography>
              <Typography variant="body2" component="p">
                Directory documentation
                <br />
              </Typography>
              <Avatar></Avatar>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={10} md={4} lg={3} className={classes.fondo}>
          <Card className={classes.root}>
            <CardContent>
            <CardActions>
            <Button
                  variant="contained"
                  color="'#002884'"
                  href="#contained-buttons"
                >
                  IOS
                </Button>
            </CardActions>
            <Typography className={classes.pos} color="textSecondary">
                Configuring azure active
              </Typography>
              <Typography variant="body2" component="p">
                Directory documentation
                <br />
              </Typography>
              <Avatar></Avatar>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={10} md={4} lg={3} className={classes.fondo}>
        
        <Card className={classes.root}>
          <CardContent>
          <CardActions>
            <Button
                  variant="contained"
                  color="'#002884'"
                  href="#contained-buttons"
                >
                  IOS
                </Button>
            </CardActions>
            <Typography className={classes.pos} color="textSecondary">
                Configuring azure active
              </Typography>
              <Typography variant="body2" component="p">
                Directory documentation
                <br />
              </Typography>
              <Avatar></Avatar>
          </CardContent>
        </Card>
      </Grid>  
    </div>
  );
};

export default withWidth()(Columnas);
