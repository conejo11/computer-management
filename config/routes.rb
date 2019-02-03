Rails.application.routes.draw do
  get 'components/content-index'

  resources :pages

  post '/create_computer' => 'pages#create_computer'

  root 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
