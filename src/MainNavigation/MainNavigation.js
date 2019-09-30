import React from 'react';
import {List, ListItem, ListItemText, Typography} 
from '@material-ui/core/';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  listitem:{
    display:"inline-block",
    width:150,
    textAlign:"right"
  },
});

const listitems = [
    {
        text:"Home",
        id:1,
        link:""
    },
    {
        text:"Second link",
        id:2
    },    
    {
        text:"Third link",
        id:3
    },
    {
    text: "Fourth link",
    id:4
},
{
    text: "Fifth link",
    id:5
},
]

const MainNavigation = () => {
    const classes = useStyles();
return(
    <div>
    <List component="nav">
    {listitems.map(item => (
        <ListItem className={classes.listitem} key={item.id}>
            <ListItemText>
                <Typography>
                    {item.text}
                </Typography>
            </ListItemText>
        </ListItem>
    ))}
    </List>
</div>
);
}

export default MainNavigation;
