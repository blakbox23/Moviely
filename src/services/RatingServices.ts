import ApiService from "./ApiServices";
import { IratingObject } from "../components/UI/molecules/RatingComponent/RatingComponent"

const ENDPOINTS = {
    RATINGS: '/ratings/',
    MOVIES: '/movies/',
}
 
class RatingService extends ApiService {

    editMovieRating = (values: IratingObject) => {
        return this.apiClient.put(ENDPOINTS.MOVIES + values.movieId + '/ratings', values)
    }

}
export const ratingService: any = new RatingService(); 