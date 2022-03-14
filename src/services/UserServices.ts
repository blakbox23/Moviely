import { updateUserObject } from "../store/types/types";
import ApiService from "./ApiServices";

const ENDPOINTS = {
    LOGIN: '/login',
    USERS: '/users/'
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

}
export const userService: any = new UserService(); 