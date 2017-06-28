require 'rack'

# the variable app we are saving below has a
# function





# this app is something we could pass into
# Rack that would return a Hello World response
app = Proc.new do |env|
    # the environment
    # Rack/response and Rack/request provide
    # and easy to user API
    req = Rack::Request.new(env)
    res = Rack::Response.new
    # setting the content type tells the
    # browser what the server has given it
    # in response
    res['Content-Type'] = 'text/html'
    # to user html you can use the
    # .write method to add it to the body
    res.write("#{req.path}")
    # res#finish will wrap everything up
    # for rack
    res.finish
end

# This will give the app to rack
# the port is abritrary here
# but 3000 is commonly chosen...
Rack::Server.start(
  app: app,
  Port: 3000
)
