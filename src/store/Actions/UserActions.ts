import { userTypes } from '../ActionTypes/Usertypes'
import { 
  Logintype, 
  LoginSuccessType, 
  LoginFailureType, 
  LoginFailurePayload, 
  LoginSuccessPayload, 
  isLoggedInType,
  logOutType,
  DeleteUser,
  DeleteUserSuccess,
  DeleteUserFailure,
  DeleteUserFailurePayload,
} from "../types/types";

console.log('localStorage.getItem(user)');




localStorage.getItem('user') ? console.log(JSON.parse(`${localStorage.getItem('user')}`).user) : console.log('null')



  export const Login = (payload: object): Logintype => ({
      type: userTypes.LOGIN,
      payload
    })
 
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

  export const deleteUser = (payload: string): DeleteUser=> ({
  type: userTypes.DELETE_USER,
  payload
})
export const deleteUserSuccess = (payload: string): DeleteUserSuccess => ({
  type: userTypes.DELETE_USER_SUCCESS,
  payload
})
export const deleteUserFailure = (payload: DeleteUserFailurePayload): DeleteUserFailure => ({
  type: userTypes.DELETE_USER_FAILURE,
  payload
})