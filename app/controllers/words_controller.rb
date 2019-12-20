class WordsController < ApplicationController

    def index
        words = Word.all 
        render json: words, only: [:partial_word]
    end
end
