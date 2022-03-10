import ApiService from "./ApiServices";
// import { IfilteredMovie, IMovie } from "../store/types/types";

const ENDPOINTS = {
    COMMENTS: '/comments/',
  };

  class CommentsService extends ApiService {

    getComments = (values: string) => {
        return this.apiClient.get(ENDPOINTS.COMMENTS);  
    }
    approveComments = (values: string) => {
        return this.apiClient.patch(ENDPOINTS.COMMENTS+values, {approved: true});  
    }
    
}

export const commentsService: any = new CommentsService(); 