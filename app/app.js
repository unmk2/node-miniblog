var app = require('../config/server');

const PORT = process.env.PORT || config.server.port;
app.listen(PORT, config.server.host, () => {
    console.log(`Server started on port ${config.server.port} - ${config.server.host}`);
});