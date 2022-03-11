import { put, call, takeEvery, all } from 'redux-saga/effects';
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { userService } from '../../../services/UserServices';
import { deleteUserFailure, deleteUserSuccess } from '../../Actions/UserActions';
import { userTypes } from '../../ActionTypes/Usertypes';


function* workDeleteUser(action:any): any {
    try {
      const response = yield call(userService.deleteUser, action.payload);
    yield put(
        deleteUserSuccess(action.payload)
      )
      success('User deleted successfully')
    }
    
    catch (e: any) {
      notify("An error occured")
      yield put(
        deleteUserFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* DeleteUserSaga() {
    yield all([takeEvery(userTypes.DELETE_USER, workDeleteUser)])
}



export default DeleteUserSaga;