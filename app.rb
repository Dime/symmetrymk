require 'rubygems'
require 'sinatra/base'
require 'haml'
require './helpers/app_helpers'

class SinatraBootstrap < Sinatra::Base
  enable :sessions

  # Page
  get '/' do
    @title = "Symmetry Translations"
    @description = "Description"
    haml :index
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
