import React from "react";
import {
    LinearProgress,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@material-ui/core'
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import imdb from '../icons/imdb.svg'
import tomato from '../icons/tomato.svg'
import makeStyles from "@material-ui/core/styles/makeStyles";
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Tooltip} from "@material-ui/core";

const useStyles = makeStyles({
    icon_size: {
        width: 50,
        height: 30,
    }
});
const HomeComponent = ({movies}) => {
    const classes = useStyles();
    if (movies.errMess) {
        return <h1>{movies.errMess}</h1>
    }
    if (movies.isLoading) {
        return (
            <div>
                <LinearProgress/>
            </div>
        )
    }
    console.log(movies.movies.data.movies);
    const moviesView = movies.movies.data.movies.map(movie => {
        return (
            <Box style={{width: "350px"}} p={1} key={movie.id}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            image={movie.medium_cover_image}
                            title="Contemplative Reptile"/>
                        <CardContent>
                            <Typography>
                                {movie.title_long}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Tooltip title={movie.rating + '/10'}>
                            <IconButton aria-label="add to favorites">
                                <img className={classes.icon_size} src={imdb} alt=""/>
                            </IconButton>
                        </Tooltip>
                        <IconButton aria-label="add to favorites">
                            <YouTubeIcon fontSize="large"/>
                        </IconButton>
                        <IconButton aria-label="add to favorites">
                            <img className={classes.icon_size} src={tomato} alt=""/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Box>
        );
    });
    return (
        <Container>
            <Box flexWrap="wrap" justifyContent="center" display="flex" flexDirection="row">
                {moviesView}
            </Box>
        </Container>
    );
};

export default HomeComponent;
