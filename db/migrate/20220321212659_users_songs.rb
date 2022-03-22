class UsersSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :users_songs do |t|
      t.belongs_to :user
      t.belongs_to :song
    end
  end
end
