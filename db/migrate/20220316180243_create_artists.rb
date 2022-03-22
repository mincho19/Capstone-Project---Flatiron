class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :external_url
      t.string :artist_id
      t.timestamps
    end
  end
end
