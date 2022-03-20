class Song < ApplicationRecord
    belongs_to :artists
    belongs_to :albums
    has_and_belongs_to_many :users
end
