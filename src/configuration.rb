require 'compass'

Compass.configuration do |config|

  config.project_path = File.dirname(__FILE__)
  config.sass_dir = File.join('src', 'stylesheets' )
end

# sass_engine_options returns a hash, you can merge it with other options.
configuration.sass_options = Compass.sass_engine_options
