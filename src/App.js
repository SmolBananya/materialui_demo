import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import './MainNavigation/MainNavigation';
import Toolbar from '@material-ui/core/Toolbar';
import MainNavigation from './MainNavigation/MainNavigation';
import Posts from './Posts/Posts';
import Footer from './Footer/Footer';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow:1,
    padding:25,
    background:"pink"
  },
  list: {
    background: "aliceblue",
  },
  title:{
    flexGrow:1,
  },
});






const App = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography className={classes.title} variant="h3" >
          MaterialUI demo
          </Typography>
          <MainNavigation className={classes.list} />
        </Toolbar>
      </AppBar>
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
