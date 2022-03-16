import { updateUserObject } from "../store/types/types";
import ApiService from "./ApiServices";

const ENDPOINTS = {
    LOGIN: '/login',
    USERS: '/users/',
    LISTS: '/lists/',
    WATCHEDMOVIES: 'watchedMovies/'
    
}
 
class UserService extends ApiService {

    getLogin = (login: object) => {
       console.log('service log');
       console.log(login);
        return this.apiClient.post(ENDPOINTS.LOGIN, login)
    }
    deleteUser = (id: any) => {
        return this.apiClient.delete(ENDPOINTS.USERS+id, id)
    }
    updateUser = (values: any) => {
        return this.apiClient.patch(ENDPOINTS.USERS+values.id, values)
    }
    getUsersByEmail = (values: string) => {
        return this.apiClient.get(ENDPOINTS.USERS+'?email=' + values);  
    }
    createUser = (values: any) => {
        return this.apiClient.post(ENDPOINTS.USERS, values);  
    }
    fetchWatchedMovies = (id: string) => {
        return this.apiClient.get(ENDPOINTS.LISTS+id+'/watchedMovies');  
    }
    addWatchedMovie = (values: any) => {
        this.apiClient.post(ENDPOINTS.LISTS, {id: values.userId});
        return this.apiClient.post(ENDPOINTS.LISTS+values.userId+'/watchedMovies', values);  
    }
    deleteWatchedMovie = (id: any) => {
        return this.apiClient.delete(ENDPOINTS.WATCHEDMOVIES+id, id);  
    }

}
export const userService: any = new UserService(); 