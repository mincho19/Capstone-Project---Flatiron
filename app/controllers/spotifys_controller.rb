class SpotifysController < ApplicationController
    
    # -----------KEY CONSIDERATIONS-----------
    # Need a way to check if a song/artist/album exists
    # Reducing API Fetch Calls by storing all track ids, then fetching all at once
    # has_and_belongs_to_many - new migration table needed - flush out object mapping
    # render json => what is json object how does it work?
    # what information do i want to store, only need to create recommendation objects
    # hash vs accessing via square brackets

    def getTopTracks
        
        user = User.find_by(id: session[:user_id])
        time = params[:time_range]
        limit = params[:limit]
        header = {Authorization: "Bearer #{user["access_token"]}"}
        tracks_response = RestClient.get("https://api.spotify.com/v1/me/top/tracks?time_range=#{time}&limit=#{limit}", header)
        tracks_parsed = JSON.parse(tracks_response.body)
        data = tracks_parsed['items']
       
        song_name_array = Array.new()
        song_id_array = Array.new()
        artist_id_array = Array.new()

        artist_name_array = Array.new()
        album_image_array = Array.new()

        acousticness_array = Array.new()
        danceability_array = Array.new()
        energy_array = Array.new()
        instrumentalness_array = Array.new()
        key_array = Array.new()
        liveness_array = Array.new()
        loudness_array = Array.new()
        mode_array = Array.new()
        speechiness_array = Array.new()
        tempo_array = Array.new()
        time_signature_array = Array.new()
        valence_array = Array.new()

        data.each do |item|
            song_name_array.append(item['name'])
            song_id_array.append(item['id'])
            artist_id_array.append(item['artists'][0]['id'])
            artist_name_array.append(item['artists'][0]['name'])
            album_image_array.append(item['album']['images'][1]['url'])
        end

        string_of_ids = song_id_array.join(',')

        audio_features_response = RestClient.get("https://api.spotify.com/v1/audio-features?ids=#{string_of_ids}", header)
        audio_features_parsed = JSON.parse(audio_features_response.body)
        audio_features = audio_features_parsed["audio_features"]

        audio_features.each do |item|
            acousticness_array.append(item['acousticness'])
            danceability_array.append(item['danceability'])
            energy_array.append(item['energy'])
            instrumentalness_array.append(item['instrumentalness'])
            key_array.append(item['key'])
            liveness_array.append(item['liveness'])
            loudness_array.append(item['loudness'])
            mode_array.append(item['mode'])
            speechiness_array.append(item['speechiness'])
            tempo_array.append(item['tempo'])
            time_signature_array.append(item['time_signature'])
            valence_array.append(item['valence'])
        end                    

        #return an object of all the arrays
        song_data = {
            song_name_array: song_name_array,
            song_id_array: song_id_array,
            artist_name_array: artist_name_array,
            album_image_array: album_image_array,
            artist_id_array: artist_id_array,
            acousticness_array: acousticness_array,
            danceability_array: danceability_array,
            energy_array: energy_array,
            instrumentalness_array: instrumentalness_array,
            key_array: key_array,
            liveness_array: liveness_array,
            loudness_array: loudness_array,
            mode_array: mode_array,
            speechiness_array: speechiness_array,
            tempo_array: tempo_array,
            time_signature_array: time_signature_array,
            valence_array: valence_array,
            average_acousticness: acousticness_array.sum/acousticness_array.size,
            average_danceability: danceability_array.sum/danceability_array.size,
            average_energy: energy_array.sum/energy_array.size,
            average_instrumentalness: instrumentalness_array.sum/instrumentalness_array.size,
            average_key: key_array.sum/key_array.size,
            average_liveness: liveness_array.sum/liveness_array.size,
            average_loudness: loudness_array.sum/loudness_array.size,
            average_mode: mode_array.sum/mode_array.size,
            average_speechiness: speechiness_array.sum/speechiness_array.size,
            average_tempo: tempo_array.sum/tempo_array.size,
            average_time_signature: time_signature_array.sum/time_signature_array.size,
            average_valence: valence_array.sum/valence_array.size

        }

        render json: song_data
    end

    def createRecommendation
 
        user = User.find_by(id: session[:user_id])

        songArray = Array.new()

        artist = params[:artist]
        genre = params[:genre]
        song_1 = params[:song_1]
        acc = params[:acc]
        dan = params[:dan]
        ene = params[:ene]
        ins = params[:ins]
        key = params[:key]
        liv = params[:liv]
        lou = params[:lou]
        mod = params[:mod]
        spe = params[:spe]
        tem = params[:tem]
        tim = params[:tim]
        val = params[:val]

        header = {Authorization: "Bearer #{user["access_token"]}"}
        tracks_response = RestClient.get("https://api.spotify.com/v1/recommendations?limit=5&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=#{genre}%2Cedm%2Cr-n-b&seed_tracks=#{song_1}&target_acousticness=#{acc}&target_danceability=#{dan}&target_energy=#{ene}&target_instrumentalness=#{ins}&target_key=#{key}&target_liveness=#{liv}&target_loudness=#{lou}&target_mode=#{mod}&target_speechiness=#{spe}&target_tempo=#{tem}&target_time_signature=#{tim}&target_valence=#{val}", header)
        tracks_parsed = JSON.parse(tracks_response.body)
        data = tracks_parsed['tracks']

        data.each do |item|
            
            artist = find_or_create_artist(item)
            album = find_or_create_album(item, artist)
            song = find_or_create_song(item, artist, album, user)
           
            recommendation = {
                song: song,
                album: album,
                artist: artist
            }

            songArray.append(recommendation)
        end 

        render json: songArray
    end

    private

    def find_or_create_song(item, artist, album, user)
        song = Song.find_by(song_id: item['id'])
        if song
            return song
        
        else
            user.songs.create(name: item['name'], song_id: item['id'], duration: item['duration_ms'], external_url: item['external_urls']['spotify'], popularity: item['popularity'], preview_url: item['preview_url'], album: album, artist: artist)
        end
    end

    def find_or_create_album(item, artist)
        album  = Album.find_by(album_id: item['album']['id'])
        if album
            return album
        
        else
            Album.create(name: item['album']['name'], release_date: item['album']['release_date'], total_tracks:item['album']['total_tracks'], image_url:item['album']['images'][1]['url'], external_url:item['album']['external_urls']['spotify'], album_id:item['album']['id'], artist: artist)
        end
    end

    def find_or_create_artist(item)
        artist  = Artist.find_by(artist_id: item['artists'][0]['id'])
        if artist
            return artist
        else
            Artist.create(name: item['artists'][0]['name'],external_url: item['artists'][0]['external_urls']['spotify'],artist_id: item['artists'][0]['id'])
        end
    end
end
