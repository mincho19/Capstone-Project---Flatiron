class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :spotify_url, :access_token
    has_many :songs
  end
  