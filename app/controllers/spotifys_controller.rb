class SpotifysController < ApplicationController
    
    # -----------KEY CONSIDERATIONS-----------
    # Need a way to check if a song/artist/album exists
    # Reducing API Fetch Calls by storing all track ids, then fetching all at once
    #has_and_belongs_to_many - new migration table needed - flush out object mapping
    #need to rename
    #render json => what is json object how does it work?
    #what information do i want to store
    #hash vs accessing via square brackets

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
        song_genre_array = Array.new()
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
            # NEED TO ADD SONG GENRE IN HERE
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
       

        artist = params[:artist]
        genre = params[:genre]
        song_1 = params[:song_1]
        song_2 = params[:song_2]
        song_3 = params[:song_3]
        acc = params[:acc]
        dan = params[:dan]
        dur = params[:dur]
        ene = params[:ene]
        ins = params[:ins]
        key = params[:key]
        liv = params[:liv]
        lou = params[:lou]
        mod = params[:mod]
        pop = params[:pop]
        spe = params[:spe]
        tem = params[:tem]
        tim = params[:tim]
        val = params[:val]

        header = {Authorization: "Bearer #{user["access_token"]}"}
        tracks_response = RestClient.get("https://api.spotify.com/v1/recommendations?limit=3&market=ES&seed_artists=#{artist}&seed_genres=#{genre}&seed_tracks=seed_tracks=#{song_1}%2#{song_2}%2#{song_3}&target_acousticness=#{acc}&target_danceability=#{dan}&target_duration_ms=#{dur}&target_energy=#{ene}&target_instrumentalness=#{ins}&target_key=#{key}&target_liveness=#{liv}&target_loudness=#{lou}&target_mode=#{mod}&target_popularity=#{pop}&target_speechiness=#{spe}&target_tempo=#{tem}&target_time_signature=#{tim}&target_valence=#{val}", header)
        tracks_parsed = JSON.parse(tracks_response.body)

        # NEED TO PARSE BASED ON OUTPUT FROM API
        data = tracks_parsed['items']

        # create songs, albums, artists
        # get preview url and album images

    end


end
