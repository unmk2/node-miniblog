var MySql = require('sync-mysql');

var connMysqlSync = ()=>{
    console.log('Conexão com bd foi estabelecida');
    return new MySql({
        host        : 'sql10.freemysqlhosting.net', //localhost
        user        : 'sql10358541',
        password    : 'AtBGLzzwy7',
        database    : 'sql10358541'
    })
}

module.exports = ()=>{
    return connMysqlSync;
}