class Restaurant < ApplicationRecord
  has_many :locations
  has_and_belongs_to_many :cuisines
end
