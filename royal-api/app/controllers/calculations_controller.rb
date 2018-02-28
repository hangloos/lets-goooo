class CalculationsController < ActionController::Base

  def index
    @calculations = Calculation.all.as_json(include: [:routes])
    render json: @calculations
  end


  def calculate
    @calculations = Calculation.all
  end


end