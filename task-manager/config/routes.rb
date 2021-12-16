Rails.application.routes.draw do
  root 'pages#index'
  
  namespace :api do
    namespace :v1 do
      resources :accounts do
        resources :tasks
      end
    end
  end

  get '*path', to: 'pages#index', via: :all
end
