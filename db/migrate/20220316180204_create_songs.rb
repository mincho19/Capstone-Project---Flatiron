class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :preview_url
      t.string :external_spotify_url
      # need to validate presence of below
      t.string :name
      t.belongs_to :album
      t.belongs_to :artist
      t.string :release_date
      t.integer :duration
      t.integer :popularity
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
      t.integer :time_sig
      t.integer :valence
      t.string :analysis_url
      t.string :track_href
      t.string :track_id

      t.timestamps
    end
  end
end
