class WordsController < ApplicationController

    def index
        words = Word.all
        render json: words
    end

    

end
