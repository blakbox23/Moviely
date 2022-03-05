import { userTypes} from '../../ActionTypes/Usertypes';
import { UserActions, UserState } from '../../types/types';

const initialState: UserState = {
    pending: false,
    error: null,
    user: null,
  };

const userReducer = (state = initialState, action: UserActions) => {
    switch (action.type) {
        
      case userTypes.LOGIN:
        return {
            ...state,
            pending: true,
        };       

        case userTypes.LOGIN_SUCCESS: 
        return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null
      };

      case userTypes.LOGIN_FAILURE:
        return {
          ...state,
          pending: false,
          error: action.payload.error
        };

        case userTypes.LOGGED_IN: 
        return {
        ...state,
        pending: false,
        user: action.payload,
        error: null
      };

        case userTypes.LOG_OUT: 
        return {
        ...state,
        pending: false,
        user: null,
        error: null
      };
            
      default:
            return {
                ...state
            };
    }
};

export default userReducer
