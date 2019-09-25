require 'fileutils'

Jekyll::Hooks.register :site, :post_write do |site|
  puts "Symlinking static API docs"
  ["android", "ios", "html5", "server"].each { |platform|
    FileUtils.cd("#{site.dest}/apidocs/#{platform}/") do
      FileUtils.ln_s Dir.glob("#{site.source}/_apidocs/#{platform}/v*"), "."
    end
  }
end
