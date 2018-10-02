class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :book_id, null: false
      t.integer :score, null: false
      t.string :title, null: false
      t.string :body, null: false
      t.timestamps
    end
    add_index :reviews, [:book_id, :author_id], :unique => true
  end
end
