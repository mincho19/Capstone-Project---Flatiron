class UsersController < ApplicationController

    def create
        if params[:error]
            puts "Login Error", params
            redirect_to "http://localhost:3000/login/failure"
        else
            body = {
                grant_type: "authorization_code",
                code: params[:code],
                redirect_uri: redirect_uri,
                client_id:
                client_secret: 
            }

        auth_response = RestClient.post('https://accounts.spotify.com/api/token', body)
        auth_params = JSON.parse(auth_response.body)

        header = {Authorization: "Bearer #{auth_params["access_token"]}"}
        user_response = RestClient.get("https://api.spotify.com/v1/me")
    end


end
