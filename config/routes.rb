Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    get '/assets/:sym', :to => 'assets#show'
    get '/searches/assets', :to => 'searches#search'
    get '/data/:sym', :to => 'data#data'
  end
end
