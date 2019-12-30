class ScoresController < ApplicationController

    def index
        scores = Score.all 
        render json: scores
    end

    def create
        score = Score.create 
        render json: score
    end
end
