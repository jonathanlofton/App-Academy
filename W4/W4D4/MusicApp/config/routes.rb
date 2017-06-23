Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:create, :new, :show]

  # what routes are needed for a sesssion?
  # the session is created when logged in and
  # destroyed when logged out, we want a
  # new, create, and destroy

  resource :session, only: [:create, :destroy, :new]

end
