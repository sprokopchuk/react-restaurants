class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.text :description
      t.string :address
      t.string :city
      t.string :lat
      t.string :lon
      t.integer :zip
      t.string :cuisine
      t.string :phone_numbers

      t.timestamps
    end
  end
end
