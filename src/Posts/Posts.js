import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid} 
from '@material-ui/core/';

const posts = [
    {
        title:"First post",
        image:"https://apprecs.org/ios/images/app-icons/256/ec/1087482860.jpg",
        text:"Lorem ipsum",
        id:1,
        url:"https://github.com/SmolBananya"
    },
    {
        title:"Second post",
        image:"https://static-s.aa-cdn.net/img/ios/1087482860/74cd47dbdd6807498fb52e6179e95eb4?v=1",
        text:"Lorem ipsum",
        id:2,
        url:"https://fi.pinterest.com/"
    },    {
        title:"Third post",
        image:"https://static-s.aa-cdn.net/img/gp/20600011065432/7zGTVH7Bf2I42_AjgarURIBfib5MH2n2tU5usTzDnDRQfPzhMEzCa9sFkWFV-F1Br16G=s300?v=1",
        text:"Lorem ipsum",
        id:3,
        url:"https://www.animenewsnetwork.com/news/"
    },    {
        title:"Fourth post",
        image:"https://img14.androidappsapk.co/300/e/3/e/com.platonicgames.hop.png",
        text:"Lorem ipsum",
        id:4,
        url:"https://www.is.fi/"
    },    {
        title:"Fifth post",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFYmtAQsCG08l4BKXEKHpZqBd9aLO29C_4E7rjectlo-Moeh7",
        text:"Lorem ipsum",
        id:5,
        url:"https://www.supersaa.fi/?utm_source=www.is.fi&utm_medium=referral&utm_campaign=supersaa-widget"
    },
    
]

const Posts = () => {
    return(
        <div style={{marginTop:120, padding:20}}>
            <Grid container
            direction="row"
            justify="flex-start"
            alignItems="flex-start" spacing={5} >
            {posts.map(postitem => (
                <Grid item xs={3} >
                    <Card key={postitem.id}>
                        <CardMedia 
                        component="img"
                        alt={postitem.title}
                        height="256"
                        image={postitem.image}
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h5">
                                {postitem.title}
                            </Typography>
                            <Typography variant="caption">
                                {postitem.text}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" color="secondary" size="small" href={postitem.url}>Read more</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </div>
    );
}

export default Posts;
