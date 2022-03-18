import ApiService from "./ApiServices";
import { IfetchRatingObject, IratingObject } from "../components/UI/molecules/RatingComponent/RatingComponent"

const ENDPOINTS = {
    RATINGS: '/ratings/',
    MOVIES: '/movies/',
    WATCHEDMOVIES: 'watchedMovies/'
}
 
class RatingService extends ApiService {

    editMovieRating = (values: IratingObject[]) => {
        return this.apiClient.patch(ENDPOINTS.MOVIES, values)
    }

    getMovieRating = (movieId: string) => {
        return this.apiClient.get(ENDPOINTS.MOVIES + movieId + '/ratings')    
    } 
 
    updatePostRating = (values: any) => {
        return this.apiClient.post(ENDPOINTS.MOVIES + values.movieId + '/ratings', values)    
    } 
    updatePatchRating = (values: any) => {
        return this.apiClient.patch(ENDPOINTS.MOVIES + values.movieId+ '/ratings/' +values.ratingId, values)    
    } 
    setMovieRating = (values: any) => {
        return this.apiClient.patch(ENDPOINTS.MOVIES +values.movieId, values)    
    } 
    getWatchedId = (values: any) => {
        return this.apiClient.get(ENDPOINTS.WATCHEDMOVIES + '?title=' +values.movieTitle )    
    } 
    setWatchedMovieRating = (values: any) => {
        return this.apiClient.patch(ENDPOINTS.WATCHEDMOVIES + values.id, values)    
    } 



}
export const ratingService: any = new RatingService(); 