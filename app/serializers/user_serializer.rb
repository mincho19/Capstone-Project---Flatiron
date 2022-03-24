class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :spotify_url
    has_many :songs
  end
  