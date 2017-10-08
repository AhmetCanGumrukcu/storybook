var Hapi = require('hapi');
var server = new Hapi.Server({
  connections:{routes:{cors:{credentials:true}}}
});
server.connection({ host: 'localhost', port: 3000 });
server.route({
    path: '/{path*}',
    method: 'GET',
    handler: {
        directory: {
            path: './tools',
            listing: false
        }
    }
});
server.start(function () {
    console.log("Listening on " + server.info.uri);
});