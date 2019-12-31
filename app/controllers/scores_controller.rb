class ScoresController < ApplicationController

    def index
        scores = Score.all 
        render json: scores
    end

    def create
        score = Score.create(score: params[:score], user_id: params[:user_id])
        render json: score
    end
end
