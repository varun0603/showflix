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

const HomeComponent = ({movies}) => {
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
    const moviesView = movies.movies.data.movies.map(movie => {
        return (
            <Box style={{maxWidth: "350px"}} p={1} key={movie.id}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            image={movie.medium_cover_image}
                            title="Contemplative Reptile"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {movie.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {movie.description_full.substring(0, 100) + "..."}
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
