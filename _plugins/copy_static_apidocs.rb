require 'fileutils'

Jekyll::Hooks.register :site, :post_write do |p|
  puts "Copying static api docs"
  Dir.glob('_apidocs/android/v*').each { |d| FileUtils.cp_r d, '_site/apidocs/android/' }
  Dir.glob('_apidocs/ios/v*').each { |d| FileUtils.cp_r d, '_site/apidocs/ios/' }
  Dir.glob('_apidocs/html5/v*').each { |d| FileUtils.cp_r d, '_site/apidocs/html5/' }
  Dir.glob('_apidocs/server/v*').each { |d| FileUtils.cp_r d, '_site/apidocs/server/' }
end
