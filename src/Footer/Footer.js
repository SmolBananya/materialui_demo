import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  TextField,
  Typography,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Button,
  Grid,
  List, 
  ListItem, 
  ListItemText,
  Container
} from "@material-ui/core/";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  formi: {
    background: "pink",
    width: 256,
    padding: 10,
    borderRadius: 5,
    boxSizing: "border-box"
  },
  button: {
    marginLeft: 5,
    boxSizing: "border-box"

  },
  footer:{
    boxSizing: "border-box"
  },
  link:{
    textDecoration: "none"
}
});

const footerItems = [
    {
        text:"Contacts",
        path:"/contact",
        id:1
    },
    {
        text:"About",
        path:"/about",
        id:2
},
]

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
        <Container>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={1}
        align-items-xs-center
      >
        <Grid item xs={6}>
        <List component="footer">
        
            {footerItems.map(item => (
                <ListItem className={classes.footer} key={item.id}>
                    <ListItemText>
                    <Typography>
                    <Link className={classes.link} to={item.path}>{item.text}</Link>
                    </Typography>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
        </Grid>

        <Grid item xs={6}>
          <form className={classes.formi}>
            <Typography variant="h4">General info</Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="First name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Last name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              type="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Phone number"
              type="phone"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              type="password"
            />

            <FormLabel>
              <Typography variant="subtitle1">Gender</Typography>
              <RadioGroup aria-label="gender" name="gender1" row>
                <FormControlLabel
                  value="Female"
                  control={<Radio color="secondary" />}
                  label="Female"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio color="secondary" />}
                  label="Male"
                  labelPlacement="top"
                />{" "}
                <FormControlLabel
                  value="Other"
                  control={<Radio color="secondary" />}
                  label="Other"
                  labelPlacement="top"
                />
              </RadioGroup>
            </FormLabel>

            <Typography variant="subtitle1">Favourite colors</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checkedH"
                />
              }
              label="Pink"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checkedH"
                />
              }
              label="Black"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checkedH"
                />
              }
              label="White"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checkedH"
                />
              }
              label="Blue"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checkedH"
                />
              }
              label="Yellow"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checkedH"
                />
              }
              label="Orange"
            />

            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              size="small"
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default Footer;
