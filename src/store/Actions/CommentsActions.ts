import { commentsTypes } from '../ActionTypes/Commentstypes'
import { GetAllComments, GetAllCommentsFailure, GetAllCommentsFailurePayload, GetAllCommentsSuccess, GetAllCommentsSuccessPayload } from '../types/types';



export const getAllComments = (): GetAllComments => ({ 
    type: commentsTypes.GET_ALL_COMMENTS
  });
  export const getAllCommentsSuccess = (payload: GetAllCommentsSuccessPayload): GetAllCommentsSuccess => ({
    type: commentsTypes.GET_ALL_COMMENTS_SUCCESS,
    payload
  });
  export const getAllCommentsFailure = (payload: GetAllCommentsFailurePayload): GetAllCommentsFailure => ({
    type: commentsTypes.GET_ALL_COMMENTS_FAILURE,
    payload
  }); 