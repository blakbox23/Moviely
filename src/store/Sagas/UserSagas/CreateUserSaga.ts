 import { put, call, takeEvery, all } from 'redux-saga/effects';
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { createUserFailure, createUserSuccess } from '../../Actions/UserActions';
import { userService } from '../../../services/UserServices';
import { userTypes } from '../../ActionTypes/Usertypes';
import { toast } from 'react-toastify';


function* workCreateUser(action:any): any {
    try {
      const responseByEmail = yield call(userService.getUsersByEmail, action.payload.email);

      console.log('responseByEmail')
      console.log(responseByEmail.data)

   if(responseByEmail.data.length===0){
    const response = yield call(userService.createUser, action.payload);

    yield put(
        createUserSuccess({
          user: response.data
        })
      )
      success('User created successfully')  
      toast('Ready to Sign in!', { delay: 2500 })
    } else {
         yield put(
            createUserFailure({ 
          error: 'User with this e-mail already exists'
        })
      ); 
      notify('User with this e-mail already exists')
    }}
    
    catch (e: any) {
      notify("Please use a stronger password")
      yield put(
        createUserFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* CreateUserSaga() {
    yield all([takeEvery(userTypes.CREATE_USER, workCreateUser)])
}



export default CreateUserSaga; 