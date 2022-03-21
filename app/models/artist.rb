class Artist < ApplicationRecord
    has_many :albums
    has_many :songs
    has_many :users, through: :songs

    self.primary_key = "id"

end
