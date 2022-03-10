import { commentsTypes } from '../ActionTypes/Commentstypes'
import { ApproveComments, ApproveCommentsFailure, ApproveCommentsFailurePayload, ApproveCommentsSuccess, ApproveCommentsSuccessPayload, DeleteComment, DeleteCommentFailure, DeleteCommentFailurePayload, DeleteCommentSuccess, DeleteCommentSuccessPayload, GetAllComments, GetAllCommentsFailure, GetAllCommentsFailurePayload, GetAllCommentsSuccess, GetAllCommentsSuccessPayload } from '../types/types';



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

  export const deleteComment = (payload: string): DeleteComment => ({
    type: commentsTypes.DELETE_COMMENT,
    payload  
});
export const deleteCommentSuccess = (payload: DeleteCommentSuccessPayload): DeleteCommentSuccess => ({
  type: commentsTypes.DELETE_COMMENT_SUCCESS,
  payload
});
export const deleteCommentFailure = (payload: DeleteCommentFailurePayload): DeleteCommentFailure => ({
  type: commentsTypes.DELETE_COMMENT_FAILURE,
  payload
}); 