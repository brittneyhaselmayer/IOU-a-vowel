class UsersController < ApplicationController

    def index
         @users = User.all 
        render json: @users, only: [:name]
    end

end
