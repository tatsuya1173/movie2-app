class CommentsController < ApplicationController


  def create
    comment = Comment.create(comment_params)
    if comment.save
      redirect_to "/movies/#{comment.movie.id}"
    else
       redirect_to "/movies/#{comment.movie.id}"
    end

  end

  private
  def comment_params
    params.require(:comment).permit(:comment).merge(user_id: current_user.id, movie_id: params[:movie_id])
  end

end
