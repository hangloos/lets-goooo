class Calculation < ApplicationRecord
  has_many :batches
  has_many :routes, through: :batches
end
