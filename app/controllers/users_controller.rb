
class UsersController < ApplicationController

    require 'rest-client'

    def show
        user = User.find_by(id: session[:user_id])
        # byebug
        #session[:user_id] is showing nil
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end


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

            # NEED TO CHECK FOR EXISTING USERS

            @user = User.find_or_create_by(
                username: user_params["id"],
                spotify_url: user_params["external_urls"]["spotify"],
                href: user_params["href"],
                uri: user_params['uri']
            )
            @user.update(access_token:auth_params["access_token"], refresh_token:auth_params["refresh_token"])

            # USER IS CREATED AT THIS POINT, NEED TO CREATE A SESSION
            
            # userBody = {
            #     spotify_url: @user.spotify_url
            # }

            # session_response = RestClient.post('http://localhost:3000/session', userBody)
            # session_params = JSON.parse(session_response.body)

            session[:user_id] = @user.id

            #SESSION IS CREATED, RETURN BACK TO MAIN PAGE

            redirect_to "http://localhost:4000/main"

            end
    end

    # NEED TO FINISH THE FIND_OR_CREATE_BY METHOD
    private

    def find_or_create_by(username: , spotify_url:, href:, uri:)
        if User.find_by(spotify_url: spotify_url) != nil
            User.find_by(spotify_url: spotify_url)
        else
            User.create(username: username, spotify_url: spotify_url, href: href, uri: uri)
        end
    end

end
