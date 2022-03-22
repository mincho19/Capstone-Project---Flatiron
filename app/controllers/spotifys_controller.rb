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
        acousticness_array = Array.new()
        danceability_array = Array.new()
        energy_array = Array.new()
        instrumentalness_array = Array.new()
        key_array = Array.new()
        liveness_array = Array.new()
        loudness_array = Array.new()
        mode = Array.new()
        speechiness_array = Array.new()
        tempo_array = Array.new()
        time_signature_array = Array.new()
        valence_array = Array.new()

        data.each do |item|
            song_name_array.append(item['name'])
            song_id_array.append(item['id'])
        end

        string_of_ids = song_id_array.join(',')

        audio_features_response = RestClient.get("https://api.spotify.com/v1/audio-features?ids=#{stringOfIds}", header)
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
            mode.append(item['mode'])
            speechiness_array.append(item['speechiness'])
            tempo_array.append(item['tempo'])
            time_signature_array.append(item['time_signature'])
            valence_array.append(item['valence'])
        end                    

        #return an object of all the arrays
        song_data = {
            song_name_array: song_name_array
            song_id_array: song_id_array
            acousticness_array: acousticness_array
            danceability_array: danceability_array
            energy_array: energy_array
            instrumentalness_array: instrumentalness_array
            key_array: key_array
            liveness_array: liveness_array
            loudness_array: loudness_array
            mode: mode
            speechiness_array: speechiness_array
            tempo_array: tempo_array
            time_signature_array: time_signature_array
            valence_array: valence_array
            averageData: {
                average_acousticness: acousticness_array.average()
            }
        }

        render json: song_data
    end


end
