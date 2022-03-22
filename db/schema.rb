# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_21_212659) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "name"
    t.string "release_date"
    t.integer "total_tracks"
    t.string "image_url"
    t.string "external_url"
    t.string "album_id"
    t.bigint "artist_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_albums_on_artist_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "external_url"
    t.string "artist_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "songs", force: :cascade do |t|
    t.integer "duration"
    t.string "external_url"
    t.string "song_id"
    t.string "name"
    t.integer "popularity"
    t.string "preview_url"
    t.bigint "album_id"
    t.bigint "artist_id"
    t.decimal "acousticness"
    t.decimal "danceability"
    t.decimal "energy"
    t.decimal "instrumentalness"
    t.integer "key"
    t.decimal "liveness"
    t.decimal "loudness"
    t.integer "mode"
    t.decimal "speechiness"
    t.decimal "tempo"
    t.integer "time_signature"
    t.decimal "valence"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["album_id"], name: "index_songs_on_album_id"
    t.index ["artist_id"], name: "index_songs_on_artist_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "spotify_url"
    t.string "href"
    t.string "uri"
    t.string "access_token"
    t.string "refresh_token"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users_songs", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "song_id"
    t.index ["song_id"], name: "index_users_songs_on_song_id"
    t.index ["user_id"], name: "index_users_songs_on_user_id"
  end

end
