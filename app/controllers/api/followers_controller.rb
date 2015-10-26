class Api::FollowersController < ApplicationController
  def create
    @follower = Follower.new(follower_params)
    if @follower.save
      render json: @follower
    else
      render json: {message: 'failure'}, status: 422
    end
  end

  def show
    @follower= Follower.find(params[:id])
    render json: @follower
  end

  def destroy
    @follower= Follower.find(params[:id])
    @follower.destroy!
    render json: {}
  end

  private

  def follower_params
    params.require(:follower).permit(:follower_id, :followee_id)
  end

end

end
