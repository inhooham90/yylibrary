class CreateRentals < ActiveRecord::Migration[5.2]
  def change
    create_table :rentals do |t|
      t.integer :book_id, null: false
      t.integer :renter_id, null: false
      t.timestamps
    end
    add_index :rentals, [:book_id, :renter_id], :unique => true
  end
end
