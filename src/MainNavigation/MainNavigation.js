import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core/";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  listitem: {
    display: "inline-block",
    width: 150,
    textAlign: "right"
  },
  link:{
    textDecoration: "none"
}
});

const listitems = [
  {
    text: "Home",
    id: 1,
    path:"/",
  },
  {
    text: "About",
    path:"/about",
    id: 2
  },
  {
    text: "Contact",
    path:"/contact",
    id: 3
  },
];

const MainNavigation = () => {
  const classes = useStyles();
  return (
    <div>
      <List component="nav">
        {listitems.map(item => (
          <ListItem className={classes.listitem} key={item.id}>
            <ListItemText>
              <Link className={classes.link} to={item.path}>{item.text}</Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MainNavigation;
