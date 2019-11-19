import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function PrimarySearchAppBar(setting) {

  const classes = useStyles();

  return (
    <AppBar position="static"
      color="primary"
    >
      <Toolbar>
       
        

        <Typography variant="h6" className={classes.title}>

        </Typography>

      </Toolbar>
    </AppBar>
  );
}

export default PrimarySearchAppBar;