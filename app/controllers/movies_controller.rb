class MoviesController < ApplicationController
  before_action :request_path
def request_path
    @path = controller_path + '#' + action_name
    def @path.is(*str)
        str.map{|s| self.include?(s)}.include?(true)
    end
end

  def index
    @movies = Movie.all.order("id DESC")

  end

  def new
    @movie = Movie.new
  end

 

  def show
    @movie = Movie.find_by(id: params[:id])
    @user = User.find_by(id: @movie.user_id)

    @comment = Comment.new
    @comments = @movie.comments.includes(:user)

  end

  def create

    @movie = Movie.new(movie_params)
    @movie.user_id = current_user.id
    if @movie.save
      # binding.pry

      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
    @movie = Movie.find(params[:id])
 end

  def update
    @movie = Movie.find(params[:id])
 
      if @movie.user_id == current_user.id
        @movie.update(movie_params)
        redirect_to root_path
  
      else
      flash[:alert] = '正しく入力されていない箇所があります。'
      render :edit
      end
  end

  def destroy
    @movie = Movie.find(params[:id])
     if @movie.user_id == current_user.id
      @movie.destroy #destroyメソッドを使用し対象のcontentsを削除する。
      redirect_to root_path
     end
  end

private
  def movie_params
    params.require(:movie).permit(:title, :body, :image, :category).merge(user_id: current_user.id) 
  end

end
