import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import "./MainNavigation/MainNavigation";
import Toolbar from "@material-ui/core/Toolbar";
import MainNavigation from "./MainNavigation/MainNavigation";
import Posts from "./Posts/Posts";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 25,
    background: "pink"
  },
  list: {
    background: "aliceblue"
  },
  title: {
    flexGrow: 1
  },
  about:{
    marginTop:150,
    flexGrow:1,
    textAlign:"right",
    marginRight:20
  },
  contact:{
    marginTop:150,
    flexGrow:1
  },
  link:{
    textDecoration: "none"
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
    <Posts />
    </div>
  );
};
const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.about}>
      <h1>This is About page</h1>
    </div>
  );
};
const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <h1>This is contact page</h1>
    </div>
  );
};

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <AppBar className={classes.root}>
          <Toolbar>
            <Typography className={classes.title} variant="h3">
              MaterialUI demo
            </Typography>
            <MainNavigation className={classes.list} />
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
