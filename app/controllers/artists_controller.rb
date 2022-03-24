class ArtistsController < ApplicationController

    def show
        artist = find_artist
        render json: artist
    end

    def index
        artists = Artist.all
        render json: artists
    end

    private

    def find_artist
        Artist.find(params[:id])
    end

    
end
