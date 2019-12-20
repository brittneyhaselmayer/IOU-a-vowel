Rails.application.routes.draw do
 
  resources :users, only: [:index, :create]
  resources :words, only: [:index]
end
