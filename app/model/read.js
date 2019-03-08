module.exports.ExeRead = (app,base,query = ``,termos = ``)=>{
    var conn = app.config.dbSyncSql();

    if(termos == ``){
        var t = '*';
    }else{
        var t = termos;
    }
    var dados = conn.queueQuery(`SELECT ${t} FROM ${base} ${query}`)();
    conn.dispose();
    return dados;
}