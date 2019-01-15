var MySql = require('sync-mysql');

var connMysqlSync = ()=>{
    console.log('Conexão com bd foi estabelecida');
    return new MySql({
        host        : '127.0.0.1', //localhost
        user        : 'blog',
        password    : '123456',
        database    : 'blog'
    })
}

module.exports = ()=>{
    return connMysqlSync;
}