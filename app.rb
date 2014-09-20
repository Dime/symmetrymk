require 'rubygems'
require 'sinatra/base'
require 'haml'
require 'mail'
require 'rack-flash'
require './helpers/app_helpers'
require './emails/email_sender'
require './emails/email_validator'

class SinatraBootstrap < Sinatra::Base
  enable :sessions
  use Rack::Flash

  if ENV['RACK_ENV'] == 'production'
    mail_settings = { :address   => "smtp.sendgrid.net",
      :port      => 587,
      :domain    => "symmetry.mk",
      :user_name => ENV['SENDGRID_USERNAME'],
      :password  => ENV['SENDGRID_PASSWORD'],
      :authentication => 'plain',
      :enable_starttls_auto => true }

    Mail.defaults do
      delivery_method :smtp, mail_settings
    end
  else
    Mail.defaults do
      delivery_method :sendmail
    end
  end

  # Pages
  
  get '/' do
    @title = "Symmetry Translations"
    @description = "Description"
    haml :index
  end

  # Mailers

  post '/' do
    unless EmailValidator.validate(request.params)
      flash[:error] = 'Your email form is invalid!'
    end

    EmailSender.deliver_hire_email(request.params)

    flash[:notice] = 'Thank you! Your email has been sent.'
    redirect '/'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
