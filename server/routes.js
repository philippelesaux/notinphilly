var path = require('path');

module.exports = function(app) {
    console.log("init routes");

    // Insert routes below
    app.use('/api/users', require('./api/user'));
    app.use('/api/neighborhoods', require('./api/neighborhood'));
    app.use('/api/streets', require('./api/street'));
    app.use('/api/roles', require('./api/role'));

    app.use('/api/auth', require('./api/auth'));
    app.use('/api/userstats', require('./api/userstats'));
    app.use('/api/inventory', require('./api/inventory'));
    app.use('/api/toolrequests', require('./api/toolRequests'));
    app.use('/api/external', require('./api/external'));

    // All other routes should redirect to the index.html
    app.route('/*')
    .get(function(req, res) {
        var pathToIndex = path.resolve(app.get('clientPath') + '/index.html');
        res.sendFile(pathToIndex);
    });
};
