Rails.application.routes.draw do
  get 'static_pages/archives/:id', to: 'static_pages#archives'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
