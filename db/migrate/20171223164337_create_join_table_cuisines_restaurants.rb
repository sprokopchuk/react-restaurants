class CreateJoinTableCuisinesRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_join_table :cuisines, :restaurants
  end
end
