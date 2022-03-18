import ApiService from "./ApiServices";
// import { IfilteredMovie, IMovie } from "../store/types/types";

const ENDPOINTS = {
    COMMENTS: '/comments/',
    MOVIES: '/MOVIES/'
  };

  class CommentsService extends ApiService {

    getComments = (values: string) => {
        return this.apiClient.get(ENDPOINTS.COMMENTS);  
    }
    approveComments = (values: string) => {
        return this.apiClient.patch(ENDPOINTS.COMMENTS+values, {approved: true});  
    }
    deleteComment = (id: any) => {
        return this.apiClient.delete(ENDPOINTS.COMMENTS + id, id);
      }
    getCommentsCount = (id: any) => {
        return this.apiClient.get(ENDPOINTS.MOVIES + id);
      }
    addCommentsCount = (values: any) => {
        return this.apiClient.patch(ENDPOINTS.MOVIES + values.id, values);
      }
    
}

export const commentsService: any = new CommentsService(); 