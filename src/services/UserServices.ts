import ApiService from "./ApiServices";

const ENDPOINTS = {
    LOGIN: '/login',
}
 
class UserService extends ApiService {

    getLogin = (login: object) => {
       console.log('service log');
       console.log(login);
        return this.apiClient.post(ENDPOINTS.LOGIN, login)
    }

}
export const userService: any = new UserService(); 