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

}
export const userService: any = new UserService(); 