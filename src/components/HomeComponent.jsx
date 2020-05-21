import React from "react";
import {
    LinearProgress,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});
const HomeComponent = ({movies}) => {
    const classes = useStyles();
    if (movies.errMess) {
        return <h1>{movies.errMess}</h1>
    }
    if (movies.isLoading) {
        return (
            <div className="mt-4">
                <LinearProgress/>
            </div>
        )
    }
    console.log(movies.movies.data.movies);
    const moviesview = movies.movies.data.movies.map(movie => {
        return (
            <div key={movie.id} className="col-sm-4">
                <div className="m-4">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                image={movie.medium_cover_image}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {movie.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {movie.description_full}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {moviesview}
            </div>
        </div>
    );
};

export default HomeComponent;
