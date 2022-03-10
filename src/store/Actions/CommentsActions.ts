import { commentsTypes } from '../ActionTypes/Commentstypes'
import { ApproveComments, ApproveCommentsFailure, ApproveCommentsFailurePayload, ApproveCommentsSuccess, ApproveCommentsSuccessPayload, GetAllComments, GetAllCommentsFailure, GetAllCommentsFailurePayload, GetAllCommentsSuccess, GetAllCommentsSuccessPayload } from '../types/types';



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

export const approveComments = (payload: string): ApproveComments => ({ 
    type: commentsTypes.APPROVE_COMMENTS,
    payload
  });
  export const approveCommentsSuccess = (payload: ApproveCommentsSuccessPayload): ApproveCommentsSuccess => ({
    type: commentsTypes.APPROVE_COMMENTS_SUCCESS,
    payload
  });
  export const approveCommentsFailure = (payload: ApproveCommentsFailurePayload): ApproveCommentsFailure => ({
    type: commentsTypes.APPROVE_COMMENTS_FAILURE,
    payload
  }); 