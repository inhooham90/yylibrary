class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :code, null: false
      t.string :author, null: false
      t.string :year, null: false
      t.string :description, null: false
      t.timestamps
    end
    add_index :books, :code, unique: true
  end
end
