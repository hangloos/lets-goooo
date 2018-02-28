class Route < ApplicationRecord
  has_many :quantities
  has_many :units, through: :quantities
  belongs_to :location
  has_many :batches
  has_many :calculations, through: :batches
end
