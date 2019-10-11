import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid} 
from '@material-ui/core/';
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import postdata from "./postdata";



const Posts = ({ match }) => {
  return (
    <div style={{marginTop:120, padding:20}}>
      <Grid
        container
        direction="row"
        justify="flex-start"
            alignItems="flex-start" spacing={5}
      >
        <Grid item xs={3}>
          {postdata.map(postitem => (
            <Card>
              <CardMedia component="img" height="256" image={postitem.image} />
              <CardContent>
                <AcUnitIcon />
                <Typography>{postitem.title}</Typography>
              </CardContent>
              <CardActions>
                <Link to={`${match.url}${postitem.id}`}>Read more</Link>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Posts;