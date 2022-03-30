class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :song_id, :preview_url, :duration, :external_url, :popularity, :album, :artist, :created_at
  
end
