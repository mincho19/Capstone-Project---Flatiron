class LoginsController < ApplicationController

    # client_id = '29e9138a3be045b5bfaef26b9eb5f72b'; 
    # client_secret = '61a29fdcedda4729b2d70a15447f9fd4';
    # redirect_uri = 'http://localhost:3000/callback';

    def create
        query_params = {
            client_id: '29e9138a3be045b5bfaef26b9eb5f72b',
            response_type: "code",
            redirect_uri: 'http://localhost:3000/callback',
            scope: "user-library-read streaming user-read-playback-state user-read-recently-played user-modify-playback-state user-library-modify user-top-read user-modify-playback-state playlist-modify-public",
            show_dialog: true
        }

        url = "https://accounts.spotify.com/authorize/"
        redirect_to "#{url}?#{query_params.to_query}"
    end

end
