import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useUser } from "reactfire";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();
  const user = useUser();

  return (
    <div className={classes.root} style={{ padding: '10px 0 10px 0', marginLeft: '60px' }}>
      <Avatar alt="Remy Sharp" src= {user.photoURL} />

    </div>
  );
}
