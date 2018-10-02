class AddCoverPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :cover_url, :string
  end
end
