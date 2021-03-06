import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchMovies} from "../redux/ActionCreators";
import HomeComponent from "./HomeComponent";
import HeaderComponent from "./HeaderComponent";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import MovieDetail from "./MovieDetail";
import {Container} from "@material-ui/core";

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchMovies: () => {
        dispatch(fetchMovies());
    },
});

class Main extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <>
                <HeaderComponent movies={this.props.movies}/>
                <Switch>
                    <Route path='/home' component={() => <HomeComponent movies={this.props.movies}/>}/>
                    <Route path='/home/:movieid' component={MovieDetail}/>
                    <Redirect to='/home'/>
                </Switch>
            </>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
