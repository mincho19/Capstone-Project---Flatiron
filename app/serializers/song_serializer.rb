class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :song_id, :preview_url, :duration, :album, :artist
  
end
