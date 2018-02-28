class Unit < ApplicationRecord
  has_many :quantities
  has_many :routes, through: :quantities
end
