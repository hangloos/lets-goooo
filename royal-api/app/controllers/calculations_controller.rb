class CalculationsController < ActionController::Base

  def index
    #binding.pry
    @calculations = Calculation.all.as_json(include: [:routes, :batches])
    render json: @calculations
  end


  def calculate
    @calculations = Calculation.all
  end


end