import { userTypes } from '../ActionTypes/Usertypes'
import { 
  Logintype, 
  LoginSuccessType, 
  LoginFailureType, 
  LoginFailurePayload, 
  LoginSuccessPayload 
} from "../types/types";

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