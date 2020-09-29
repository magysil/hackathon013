import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RelojIcon from '@material-ui/icons/WatchLater';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        disabled
        size='small'
        className={classes.button}
        style={{backgroundColor:'#F6F6FA', color:'#747480'}}
        startIcon={<RelojIcon />}
      >
        01 OCT
      </Button>
    </div>
  );
}
