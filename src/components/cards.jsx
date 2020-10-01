import React from "react";
import { Grid, makeStyles, withWidth } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";

import Avatar from "./avatar";
import Fecha from './fecha';

import CheckIcon from '@material-ui/icons/CheckBoxOutlined';
import UncheckIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const estilos = makeStyles((theme) => ({
  fondo: {
    background: theme.palette.secondary,
  },
}));

const Columnas = (props) => {
  const classes = estilos();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                style={{
                  textAlign: "right",
                  fontSize: "1.6rem",
                  color: "#747480",
                  fontWeight: "bold",
                }}
              >
                ...
              </Typography>
              <CardActions>
                <Button
                  variant="contained"
                  style={{
                    background: "#000000",
                    color: "#FFFFFF",
                    textTransform: "none",
                    fontFamily: "Arial, sans-serif",
                  }}
                  href="#contained-buttons"
                  disabled="true"
                >
                  iOS
                </Button>
              </CardActions>
              <Typography
                className={classes.pos}
                color="textSecondary"
                style={{ fontSize: "1rem", color: "#4e4e4e", margin:'6px 0 8px 0' }}
              >
                Pruebas unitarias de funcionalidad navbar y toggle (utilizar
                Mocha)
                <br />
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs>
                  <IconButton style={{ color: "#747480" }}>
                    <UncheckIcon />{" "}
                    <Typography style={{ fontSize: "0.9rem" }}>0/5</Typography>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Fecha />
                </Grid>
                <Grid item></Grid>
              </Grid>

              <Grid
                container
                alignItems="flex-start"
                justify="flex-end"
                direction="row"
              >
                <Avatar></Avatar>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                style={{
                  textAlign: "right",
                  fontSize: "1.6rem",
                  color: "#747480",
                  fontWeight: "bold",
                }}
              >
                ...
              </Typography>
              <CardActions>
                <Button
                  variant="contained"
                  style={{
                    background: "#000000",
                    color: "#FFFFFF",
                    textTransform: "none",
                    fontFamily: "Arial, sans-serif",
                  }}
                  href="#contained-buttons"
                  disabled="true"
                >
                  iOS
                </Button>
              </CardActions>
              <Typography
                className={classes.pos}
                color="textSecondary"
                style={{ fontSize: "1rem", color: "#4e4e4e", margin:'6px 0 8px 0' }}
              >
                Construcción API REST con seguridad Laravel 5.8 o más
                <br />
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs>
                  <IconButton style={{ color: "#747480" }}>
                    <UncheckIcon />{" "}
                    <Typography style={{ fontSize: "0.9rem" }}>0/3</Typography>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Fecha />
                </Grid>
                <Grid item></Grid>
              </Grid>
              <Grid
                container
                alignItems="flex-start"
                justify="flex-end"
                direction="row"
              >
                <Avatar></Avatar>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                style={{
                  textAlign: "right",
                  fontSize: "1.6rem",
                  color: "#747480",
                  fontWeight: "bold",
                }}
              >
                ...
              </Typography>
              <CardActions>
                <Button
                  variant="contained"
                  style={{
                    background: "#000000",
                    color: "#FFFFFF",
                    textTransform: "none",
                    fontFamily: "Arial, sans-serif",
                  }}
                  href="#contained-buttons"
                  disabled="true"
                >
                  iOS
                </Button>
              </CardActions>
              <Typography
                className={classes.pos}
                color="textSecondary"
                style={{ fontSize: "1rem", color: "#4e4e4e", margin:'6px 0 8px 0' }}
              >
                Git Pull a repositorio de Pablo Hernández (owner)
                <br />
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs>
                  <IconButton style={{ color: "#747480" }}>
                    <CheckIcon />{" "}
                    <Typography style={{ fontSize: "0.9rem" }}>1/1</Typography>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Fecha />
                </Grid>
                <Grid item></Grid>
              </Grid>
              <Grid
                container
                alignItems="flex-start"
                justify="flex-end"
                direction="row"
              >
                <Avatar></Avatar>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                style={{
                  textAlign: "right",
                  fontSize: "1.6rem",
                  color: "#747480",
                  fontWeight: "bold",
                }}
              >
                ...
              </Typography>
              <CardActions>
                <Button
                  variant="contained"
                  style={{
                    background: "#000000",
                    color: "#FFFFFF",
                    textTransform: "none",
                    fontFamily: "Arial, sans-serif",
                  }}
                  href="#contained-buttons"
                  disabled="true"
                >
                  iOS
                </Button>
              </CardActions>
              <Typography
                className={classes.pos}
                color="textSecondary"
                style={{ fontSize: "1rem", color: "#4e4e4e", margin:'6px 0 8px 0' }}
              >
                Mentoría de agile SCRUM Beatriz Lazcano
                <br />
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs>
                  <IconButton style={{ color: "#747480" }}>
                    <UncheckIcon />{" "}
                    <Typography style={{ fontSize: "0.9rem" }}>0/1</Typography>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Fecha />
                </Grid>
                <Grid item></Grid>
              </Grid>
              <Grid
                container
                alignItems="flex-start"
                justify="flex-end"
                direction="row"
              >
                <Avatar></Avatar>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                style={{
                  textAlign: "right",
                  fontSize: "1.6rem",
                  color: "#747480",
                  fontWeight: "bold",
                }}
              >
                ...
              </Typography>
              <CardActions>
                <Button
                  variant="contained"
                  style={{
                    background: "#000000",
                    color: "#FFFFFF",
                    textTransform: "none",
                    fontFamily: "Arial, sans-serif",
                  }}
                  href="#contained-buttons"
                  disabled="true"
                >
                  iOS
                </Button>
              </CardActions>
              <Typography
                className={classes.pos}
                color="textSecondary"
                style={{ fontSize: "1rem", color: "#4e4e4e", margin:'6px 0 8px 0' }}
              >
                Revisar memcached
                <br />
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs>
                  <IconButton style={{ color: "#747480" }}>
                    <CheckIcon />{" "}
                    <Typography style={{ fontSize: "0.9rem" }}>2/3</Typography>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Fecha />
                </Grid>
                <Grid item></Grid>
              </Grid>
              <Grid
                container
                alignItems="flex-start"
                justify="flex-end"
                direction="row"
              >
                <Avatar></Avatar>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                style={{
                  textAlign: "right",
                  fontSize: "1.6rem",
                  color: "#747480",
                  fontWeight: "bold",
                }}
              >
                ...
              </Typography>
              <CardActions>
                <Button
                  variant="contained"
                  style={{
                    background: "#000000",
                    color: "#FFFFFF",
                    textTransform: "none",
                    fontFamily: "Arial, sans-serif",
                  }}
                  href="#contained-buttons"
                  disabled="true"
                >
                  iOS
                </Button>
              </CardActions>
              <Typography
                className={classes.pos}
                color="textSecondary"
                style={{ fontSize: "1rem", color: "#4e4e4e", margin:'6px 0 8px 0' }}
              >
                Capacitación Django con Laura Bailey USA
                <br />
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs>
                  <IconButton style={{ color: "#747480" }}>
                    <CheckIcon />{" "}
                    <Typography style={{ fontSize: "0.9rem" }}>1/1</Typography>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Fecha />
                </Grid>
                <Grid item></Grid>
              </Grid>

              <Grid
                container
                alignItems="flex-start"
                justify="flex-end"
                direction="row"
              >
                <Avatar></Avatar>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default withWidth()(Columnas);