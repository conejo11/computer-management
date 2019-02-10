class PagesController < ApplicationController
  protect_from_forgery except: [:create_computer]

  def index
    @list_of_computers = Computer.all.map(&:list_information)
  end

  def computer_list
    @list_of_computers = Computer.all.map(&:list_information)
  end

  def create
  end

  def new
  end

  def create_computer
  puts "We've got: #{computer_params}"

  @computer = Computer.create!(computer_params)


  if @computer.valid?

    @computer.save!

    respond_to do |service|
      service.json {

      }
      service.html {
        "deu certo!"
      }
    end
  else
    respond_to do |service|
      service.json {

      }
      service.html {
        "não deu certo!"
      }
    end
  end
end

private

def computer_params
  new_params = params.permit(:name, :cpu, :gpu, :ram, :disk, :image_data)
  new_params[:name] = new_params[:name].to_s
  new_params[:cpu] = new_params[:cpu].to_i
  new_params[:gpu] = new_params[:gpu].to_i
  new_params[:ram] = new_params[:ram].to_i
  new_params[:disk] = new_params[:disk].to_i
  new_params
end
end
