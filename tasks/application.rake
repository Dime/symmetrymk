desc 'Run the app'
task :s do
  system "rackup -p 4567"
  # system "compass watch stylesheets/screen.sass"
end
