import React from "react";
import { Grid, makeStyles, withWidth } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";

import Avatar from "./avatar";

import CheckIcon from '@material-ui/icons/CheckBoxOutlined'

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
                style={{ fontSize: "1rem", color: "#4e4e4e" }}
              >
                Configuring Azure Active Directory Documentation
                <br />
              </Typography>

              <IconButton style={{ color: "#747480" }}>
                <CheckIcon />{" "}
                <Typography style={{ fontSize: "0.9rem" }}>4/5</Typography>
              </IconButton>

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
                style={{ fontSize: "1rem", color: "#4e4e4e" }}
              >
                Configuring Azure Active Directory Documentation
                <br />
              </Typography>
              <IconButton style={{ color: "#747480" }}>
                <CheckIcon />{" "}
                <Typography style={{ fontSize: "0.9rem" }}>4/5</Typography>
              </IconButton>
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
                style={{ fontSize: "1rem", color: "#4e4e4e" }}
              >
                Configuring Azure Active Directory Documentation
                <br />
              </Typography>
              <IconButton style={{ color: "#747480" }}>
                <CheckIcon />{" "}
                <Typography style={{ fontSize: "0.9rem" }}>4/5</Typography>
              </IconButton>
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
                style={{ fontSize: "1rem", color: "#4e4e4e" }}
              >
                Configuring Azure Active Directory Documentation
                <br />
              </Typography>
              <IconButton style={{ color: "#747480" }}>
                <CheckIcon />{" "}
                <Typography style={{ fontSize: "0.9rem" }}>4/5</Typography>
              </IconButton>
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
                style={{ fontSize: "1rem", color: "#4e4e4e" }}
              >
                Configuring Azure Active Directory Documentation
                <br />
              </Typography>
              <IconButton style={{ color: "#747480" }}>
                <CheckIcon />{" "}
                <Typography style={{ fontSize: "0.9rem" }}>4/5</Typography>
              </IconButton>
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
                style={{ fontSize: "1rem", color: "#4e4e4e" }}
              >
                Configuring Azure Active Directory Documentation
                <br />
              </Typography>
              <IconButton style={{ color: "#747480" }}>
                <CheckIcon />{" "}
                <Typography style={{ fontSize: "0.9rem" }}>4/5</Typography>
              </IconButton>
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
