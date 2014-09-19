def partial(page, options={})
  engine = Haml::Engine.new(File.read page)
  engine.render(self)
end
