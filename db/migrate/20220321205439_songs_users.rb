class SongsAndUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :songs_users do |t|
      t.belongs_to :user
      t.belongs_to :song
    end
  end
end
