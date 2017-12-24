class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.belongs_to :restaurant, index: true, null: false
      t.string :address
      t.string :city
      t.string :lat
      t.string :lon
      t.integer :zip

      t.timestamps
    end
  end
end
