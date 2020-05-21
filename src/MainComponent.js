import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchMovies } from "./redux/ActionCreators";

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

class Main extends Component{
    componentDidMount(){
        this.props.fetchMovies();
        console.log(this.props.movies);
    }

    render() {
        return(
            <div>
                In main component
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);