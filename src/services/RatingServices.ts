import ApiService from "./ApiServices";
import { Iratingobject } from "../store/types/types";

const ENDPOINTS = {
    RATINGS: '/ratings/',
    MOVIES: '/movies/',
}
 
class RatingService extends ApiService {

    editMovieRating = (values: Iratingobject) => {
        return this.apiClient.post(ENDPOINTS.MOVIES + values.movieId + '/ratings', values)
    }

}
export const ratingService: any = new RatingService(); 