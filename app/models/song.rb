class Song < ApplicationRecord

    # object relationships - has and belongs to many, need joiner table
    belongs_to :artist
    belongs_to :album
    has_and_belongs_to_many :users, join_table: :users_songs
end
