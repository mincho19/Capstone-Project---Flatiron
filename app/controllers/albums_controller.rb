class AlbumsController < ApplicationController

    def show
        album = find_album
        render json: album
    end

    def index
        albums = Album.all
        render json: albums
    end

    private
    
    def find_album
        Album.find(params[:id])
    end


end
