class CalculationsController < ActionController::Base

  def index
    #binding.pry
    #render json: Review.eager_load(:review_likes, comments: [:user, :likes]).all.as_json(include: [:review_likes, comments: {include: [:user, :likes]}])    
    #render json: Calculation.all.as_json(include: [routes: {include: [:location]}, :batches])
    #@caculations = Calculation.eager_load(:routes, :batches).all(include: [routes:, :batches])
    #binding.pry
    #@calculations = Calculation.eager_load(:routes, :batches).all.includes(:routes, :batches)
    @calculations = Calculation.eager_load(:routes, :batches).all.as_json(include: [:batches, routes: {include: [:location]}])
    #@calculations = Calculation.all
    render json: @calculations
    # calculation.routes[0].location
  end


  def calculate
    @calculations = Calculation.all
  end


end