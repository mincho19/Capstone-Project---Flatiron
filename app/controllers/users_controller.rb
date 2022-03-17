class UsersController < ApplicationController

    def create
        if params[:error]
            puts "Login Error", params
            redirect_to "http://localhost:3000/login/failure"
        else
            body = {
                grant_type: "authorization_code",
                code: params[:code],
                redirect_uri: 'http://localhost:3000/callback',
                client_id: '29e9138a3be045b5bfaef26b9eb5f72b',
                client_secret: '61a29fdcedda4729b2d70a15447f9fd4'
            }

        auth_response = RestClient.post('https://accounts.spotify.com/api/token', body)
        auth_params = JSON.parse(auth_response.body)

        header = {Authorization: "Bearer #{auth_params["access_token"]}"}
        user_response = RestClient.get("https://api.spotify.com/v1/me")
        user_params = JSON.parse(user_response.body)

        @user = User.find_or_create_by(
            username: user_params["id"],
            spotify_url: user_params["external_urls"]["spotify"],
            href: user_params["href"],
            uri: user_params['uri']
        )
        @user.updated(access_token:auth_params["access_token"], refresh_token:auth_params["refresh_token"])
        redirect_to "http://localhost:4000/medium"
        end
    end
    
    private

    # def find_or_create_by
    # end

end
