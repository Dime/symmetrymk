# Sinatra Bootstrap

## A simple Sinatra starting point

Sinatra Bootstrap supports:

* [Haml](http://haml-lang.com/)
* [Sass](http://sass-lang.com/)
* [Compass](https://github.com/chriseppstein/compass)
* [jQuery](http://jquery.com/)

## What is the purpose of Sinatra Bootstrap?

I created Sinatra Bootstrap in order to have a consistent starting point for my Sinatra projects. I like having Haml, Sass and Compass available to me in every project, likewise jQuery makes its way into every production as well. A number of helpful rake tasks have also been included.

## How do I get started?

    bundle install

## How do I start the application?

Start the app by running:

    rake s

This rake command runs `bundle exec shotgun config.ru` behind the scenes for you and starts the app on Sinatra's default port 9393 and will now be able to view the application in your web browser at this URL [http://localhost:9393](http://localhost:9393).

You'll also want to open a new terminal window to the same directory and run `compass watch` to watch the Sass files for changes.

## Helper Rake Tasks

There are a few helper Rake tasks that will help you to clear and compile your Sass stylesheets as well as a few other helpful tasks. There is also a generate task, so you can generate a new project at a defined location based on the bootstrap.

    rake -T

    rake css:clear         # Clear the CSS
    rake css:compile       # Compile CSS
    rake css:compile:prod  # Compile CSS for production
    rake generate          # Generate a new project at dir=foo
    rake s                 # Run the app


## Compass

If you are working with SASS, execute

    compass watch stylesheets/screen.sass

so Compass can compile your SASS on the fly.


# Deployment

## Setup

    git remote add production git@heroku.com:siyelo.git

## Deploy

    git push heroku master
