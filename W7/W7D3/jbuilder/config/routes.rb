Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :guests, only: [:index, :show] do
      resources :gifts, only: [:index]
    end
    resources :invitations, only: [:index, :show]
    resources :parties, only: [:index, :show]
    resources :gifts, only: [:show]
  end
end
