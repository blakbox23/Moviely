import { commentsTypes } from '../../ActionTypes/Commentstypes';
import { CommentsActions, CommentsState } from '../../types/types';

const initialState: CommentsState = {
    pending: false,
    error: null,
    comments: [],
    approvedComments: []
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
        comments: action.payload.comments,
        // approvedComments: state.comments.filter((comment) => comment.approved !== true),
        error: null
      };

      case commentsTypes.GET_ALL_COMMENTS_FAILURE:
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
