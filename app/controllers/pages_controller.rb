class PagesController < ApplicationController
  protect_from_forgery except: [:create_computer]

  def index
  end

  def create
  end

  def new
  end

  def create_computer
    puts "We've got: #{params}"

    render json: {
      status_code: 200,
      message: 'Created new computer!',
    }
  end
end
