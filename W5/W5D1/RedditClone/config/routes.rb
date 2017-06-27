Rails.application.routes.draw do


  resources :subs
  resource :session
  resources :users
  resources :posts do
    resources :comments do
      end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
