class Batch < ApplicationRecord
  belongs_to :calculation
  belongs_to :route
end
