import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
root: {
    flexGrow: 1,
    marginTop:150,
    padding:25,
    minHeight:"100vh"
}

}))

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>This is the About page</h1>
        </div>
    )
}




export default About;