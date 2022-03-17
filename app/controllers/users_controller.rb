
class UsersController < ApplicationController

    require 'rest-client'

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
            user_response = RestClient.get("https://api.spotify.com/v1/me", header)
            user_params = JSON.parse(user_response.body)

            @user = User.find_or_create_by(
                username: user_params["id"],
                spotify_url: user_params["external_urls"]["spotify"],
                href: user_params["href"],
                uri: user_params['uri']
            )
            @user.update(access_token:auth_params["access_token"], refresh_token:auth_params["refresh_token"])
            redirect_to "http://localhost:4000/main"
            end
    end

    # NEED TO FINISH THE FIND_OR_CREATE_BY METHOD
    private

    def find_or_create_by(username: , spotify_url:, href:, uri:)
        User.create(username, spotify_url, href, uri)
    end

end
