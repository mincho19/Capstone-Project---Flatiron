class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists,{ id: false } do |t|
      t.string :name
      t.string :external_url
      t.string :id
      t.timestamps
    end
  end
end
