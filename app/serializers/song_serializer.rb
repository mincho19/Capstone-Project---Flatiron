class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :song_id, :album, :artist
  
end
