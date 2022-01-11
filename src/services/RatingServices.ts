import ApiService from "./ApiServices";
import { IfetchRatingObject, IratingObject } from "../components/UI/molecules/RatingComponent/RatingComponent"

const ENDPOINTS = {
    RATINGS: '/ratings/',
    MOVIES: '/movies/',
}
 
class RatingService extends ApiService {

    editMovieRating = (values: IratingObject[]) => {
        return this.apiClient.patch(ENDPOINTS.MOVIES, values)
    }

    getMovieRating = (movieId: string) => {
        return this.apiClient.get(ENDPOINTS.MOVIES + movieId + '/ratings')
    }

}
export const ratingService: any = new RatingService(); 