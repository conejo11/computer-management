Rails.application.routes.draw do
  # get 'components/content-index'
  
  resources :pages
  
  root 'pages#computer-list'
  
  get 'computer_list' => 'pages#computer-list', action: :computer_list, controller: 'pages'
  get 'index' => 'pages#index', action: :index, controller: 'pages'
end