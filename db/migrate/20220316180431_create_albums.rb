class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :release_date
      t.integer :total_tracks
      t.string :image_url
      t.string :external_url
      t.string :album_id
      t.belongs_to :artist
      t.timestamps
    end
  end
end
