class Album < ApplicationRecord
    belongs_to :artist
    has_many :songs
    has_many :users, through: :songs

    self.primary_key = "id"


end
