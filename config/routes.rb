Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :asset_ownerships, only: [:create]
    resources :watchlist_items, only: [:create, :destroy]
    resources :watchlists, only: [:index]
    get '/assets/:sym', :to => 'assets#show'
    get '/searches/assets', :to => 'searches#search'
    get '/data/:sym', :to => 'data#data'
  end
end
