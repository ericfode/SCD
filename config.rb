ROOT = File.join(File.dirname(__FILE__),'/')
puts "site root is" + File.expand_path(ROOT)

# Require any additional compass plugins here.
project_type = :stand_alone
# Set this to the root of your project when deployed:
http_path = "/"
project_path = ROOT
css_dir = "site/stylesheets/"
sass_dir = "src/stylesheets/"
images_dir = "site/images/"
javascripts_dir = "site/javascripts/"
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
#relative_assets = true
