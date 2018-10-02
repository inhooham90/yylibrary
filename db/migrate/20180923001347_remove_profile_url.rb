class RemoveProfileUrl < ActiveRecord::Migration[5.2]
  def change
        remove_column :users, :profile_url
  end
end
