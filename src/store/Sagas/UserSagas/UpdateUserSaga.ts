import { put, call, takeEvery, all } from 'redux-saga/effects';
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { updateUserFailure, updateUserSuccess } from '../../Actions/UserActions';
import { userService } from '../../../services/UserServices';
import { userTypes } from '../../ActionTypes/Usertypes';


function* workUpdateUser(action:any): any {
    try {
    const response = yield call(userService.updateUser, action.payload);
    console.log('update user sage')
    console.log(response.data)
    
    yield put(
        updateUserSuccess({
          user: response.data
        })
      )
      success('Account updated successfully')
      // localStorage.setItem('user', JSON.stringify(response.data));
    }
    
    catch (e: any) {
      notify("An error occured")
      yield put(
        updateUserFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* UpdateUserSaga() {
    yield all([takeEvery(userTypes.UPDATE_USER, workUpdateUser)])
}

export default UpdateUserSaga; 