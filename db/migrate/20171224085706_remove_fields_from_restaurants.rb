class RemoveFieldsFromRestaurants < ActiveRecord::Migration[5.1]
  def change
    remove_column :restaurants, :address, :string
    remove_column :restaurants, :city, :string
    remove_column :restaurants, :lat, :string
    remove_column :restaurants, :lon, :string
    remove_column :restaurants, :zip, :integer
    remove_column :restaurants, :cuisine, :string
  end
end
