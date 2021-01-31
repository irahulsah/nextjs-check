import React, { Component } from 'react'
import {getAnimeById,updateMovieById} from '../../../resourses/animeData';
import MovieCreateFrom from '../../../components/MovieCreateForm';
import Router from 'next/router';
 class EditPost extends Component {
    static async getInitialProps({query}){
        const {id} = query;
        const movie = await getAnimeById(id);
        return{
            movie,
            id
        }
    }
    
    handleUpdateMovie = (movie)=>{
       
        updateMovieById(movie).then(()=>{
             Router.push('/anime/[id]',`/anime/${movie.id}`);
        })
    }
    render() {
        const {movie} = this.props;
        return (
            <div>
                <h1>Edit Movie</h1>

                <MovieCreateFrom
                submitButtonText = "Update" 
                initialState = {movie}
                 submitFormData={this.handleUpdateMovie}/>
            </div>
        )
    }
}

export default EditPost;
