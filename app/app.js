var app = require('../config/server');


app.listen(config.server.port, config.server.host, () => {
    console.log(`Server started on port ${config.server.port} - ${config.server.host}`);
});