class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs, { id: false } do |t|
      t.integer :duration
      t.string :external_url
      t.string :id
      t.string :name
      t.integer :popularity
      t.string :preview_url

      t.belongs_to :album
      t.belongs_to :artist

      t.integer :acousticness
      t.integer :danceability
      t.integer :energy
      t.integer :instrumentalness
      t.integer :key
      t.integer :liveness
      t.integer :loudness
      t.integer :mode
      t.integer :speechiness
      t.integer :tempo
      t.integer :time_signature
      t.integer :valence
      t.timestamps
    end
  end
end
