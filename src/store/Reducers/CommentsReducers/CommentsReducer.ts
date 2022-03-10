import { commentsTypes } from '../../ActionTypes/Commentstypes';
import { CommentsActions, CommentsState } from '../../types/types';

const initialState: CommentsState = {
    pending: false,
    error: null,
    comments: [],
    pendingComments: [],
    comment: null,
  };


const commentsReducer = (state = initialState, action: CommentsActions) => {
    switch (action.type) {

        case commentsTypes.GET_ALL_COMMENTS:
        return {
            ...state,
            pending: true,
            error: null,
        };

        case commentsTypes.GET_ALL_COMMENTS_SUCCESS: 
        return {
        ...state,
        pending: false,
        comments: action.payload.comments.filter((comment)=>comment.approved === false),
        error: null
      };

      case commentsTypes.GET_ALL_COMMENTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };

        case commentsTypes.APPROVE_COMMENTS:
        return {
          ...state,
          pending: true,
          error: null,
        };

        case commentsTypes.APPROVE_COMMENTS_SUCCESS: 
        return {
        ...state,
        pending: false,
        comments: state.comments.filter((comment) => comment.id !== action.payload.comment.id),
        error: null
      };

      case commentsTypes.APPROVE_COMMENTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };

            
      default:
            return {
                ...state
            };
    }
};

export default commentsReducer
