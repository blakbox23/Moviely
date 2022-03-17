import { put, call, takeEvery, all } from 'redux-saga/effects';
import { userTypes } from '../../ActionTypes/Usertypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { LoginFailure, LoginSuccess } from '../../Actions/UserActions';
import { userService } from '../../../services/UserServices';


function* workLogin(action:any): any {
  console.log('action.payload');
  console.log(action.payload);
    try {
      const loginResponse = yield call(userService.getLogin, action.payload);

      localStorage.setItem('user', JSON.stringify(loginResponse.data));

      yield put(
        LoginSuccess({
            user: loginResponse.data
          })
        );
  
      } catch (e: any) {
        yield put(
          LoginFailure({
            error: e.message
          })
        ); 
        notify('Incorrect Email/Password combination')
      }
    }
  
function* LoginSaga() {
    yield all([takeEvery(userTypes.LOGIN, workLogin)])
}

export default LoginSaga;