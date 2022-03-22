class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.integer :duration
      t.string :external_url
      t.string :song_id
      t.string :name
      t.integer :popularity
      t.string :preview_url

      t.belongs_to :album
      t.belongs_to :artist

      t.decimal :acousticness
      t.decimal :danceability
      t.decimal :energy
      t.decimal :instrumentalness
      t.integer :key
      t.decimal :liveness
      t.decimal :loudness
      t.integer :mode
      t.decimal :speechiness
      t.decimal :tempo
      t.integer :time_signature
      t.decimal :valence
      t.timestamps
    end
  end
end
