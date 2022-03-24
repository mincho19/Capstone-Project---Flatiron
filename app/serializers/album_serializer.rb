class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :release_date, :total_tracks, :image_url, :external_url, :album_id, :artist
end
