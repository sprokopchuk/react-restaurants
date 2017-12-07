Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      devise_for :users
      resources :users
    end
  end
end
