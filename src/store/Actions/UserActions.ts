import { userTypes } from '../ActionTypes/Usertypes'
import { 
  Logintype, 
  LoginSuccessType, 
  LoginFailureType, 
  LoginFailurePayload, 
  LoginSuccessPayload, 
  isLoggedInType,
  logOutType
} from "../types/types";

console.log('localStorage.getItem(user)');




localStorage.getItem('user') ? console.log(JSON.parse(`${localStorage.getItem('user')}`).user) : console.log('null')



  export const Login = (payload: object): Logintype => {
    return {
      type: userTypes.LOGIN,
      payload
    };
  };
  export const LoginSuccess = (payload: LoginSuccessPayload): LoginSuccessType => ({
    type: userTypes.LOGIN_SUCCESS,
    payload
  });
  export const LoginFailure = (payload: LoginFailurePayload): LoginFailureType => ({
    type: userTypes.LOGIN_FAILURE,
    payload
  }); 

  export const isLoggedIn = (): isLoggedInType => ({
      type: userTypes.LOGGED_IN,
      payload: localStorage.getItem('user') ? JSON.parse(`${localStorage.getItem('user')}`).user : null,
  });

  export const logOut = (): logOutType => ({
      type: userTypes.LOG_OUT,
      payload: null,
  });