Rails.application.routes.draw do
  # get 'components/content-index'
  
  resources :pages
  
  root 'pages#computer-list'
  
  post '/create_computer' => 'pages#create_computer'
  get 'computer_list' => 'pages#computer-list', action: :computer_list, controller: 'pages'
  get 'index' => 'pages#index', action: :index, controller: 'pages'
end