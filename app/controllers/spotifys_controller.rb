class SpotifysController < ApplicationController
    
    # -----------KEY CONSIDERATIONS-----------
    # Need a way to check if a song/artist/album exists
    # Reducing API Fetch Calls by storing all track ids, then fetching all at once
    #has_and_belongs_to_many - new migration table needed - flush out object mapping
    #need to rename
    #what information do i want to store

    def getTopTracks
        user = User.find_by(id: session[:user_id])
        time = params[:time_range]
        limit = params[:limit]
        header = {Authorization: "Bearer #{user["access_token"]}"}
        tracks_response = RestClient.get("https://api.spotify.com/v1/me/top/tracks?time_range=#{time}&limit=#{limit}", header)
        tracks_params = JSON.parse(tracks_response.body)
        data = tracks_params['items']

        # check to see if the object already exists

        songInfo = Array.new()
        idArray = Array.new()
        songArray = Array.new()

        data.each do |item|
            artist = Artist.create(name: item['artists'][0]['name'],external_url: item['artists'][0]['external_urls']['spotify'],id: item['artists'][0]['id'])
            album = Album.create(name: item['album']['name'], release_date: item['album']['release_date'], total_tracks:item['album']['total_tracks'], image_url:item['album']['images'][1]['url'], external_url:item['album']['external_urls']['spotify'], id:item['album']['id'], artist: artist)
            songParams = {
                name: item['name'],
                id: item['id'],
                duration: item['duration_ms'],
                external_url: item['external_urls']['spotify'],
                popularity: item['popularity'],
                preview_url: item['preview_url'],
                album: album,
                artist: artist
            }
            # reduce the number of parameter fetches
            songInfo.append(songParams)
            idArray.append(item['id'])
        end

        stringOfIds = idArray.join(',')
        
        feature_response = RestClient.get("https://api.spotify.com/v1/audio-features?ids=#{stringOfIds}", header)
        feature_params = JSON.parse(feature_response.body)
        data_audio = feature_params["audio_features"]

        byebug

        data_audio.each_with_index do |item, index|
            song = Song.create(
                name: songInfo[index]['name'],
                id: songInfo[index]['id'],
                duration: songInfo[index]['duration_ms'],
                # external_url: songInfo[index]['external_url']['spotify'],
                popularity: songInfo[index]['popularity'],
                preview_url: songInfo[index]['preview_url'],
                album: songInfo[index]['album'],
                artist: songInfo[index]['artist'],
                acousticness: item['acousticness'],
                danceability: item['danceability'],
                energy: item['energy'],
                instrumentalness: item['instrumentalness'],
                key: item['key'],
                liveness: item['liveness'],
                loudness: item['loudness'],
                mode: item['mode'],
                speechiness: item['speechiness'],
                tempo: item['tempo'],
                time_signature: item['time_signature'],
                valence: item['valence']
            )
            songArray.append(song)

            # songuser = SongUser.create(user: user, song: song)
        end
        byebug
        return songArray;
    end

    private

    def create_findby_artist(id)

    end

    def create_findby_album(id)

    end

    def create_findby_track(id)

    end

end
