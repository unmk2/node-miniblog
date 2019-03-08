module.exports.ExeCreate = (app,base,dados)=>{
    var conn = app.config.dbSyncSql();

    var obj_key = Object.keys(dados);

    var keys = obj_key.join(',');

    var campos = [];
    obj_key.forEach(files =>{
        var valor = dados[files] + "'";
        campos.push(valor);
    });

    var resultado = "'" + campos.join("," + "'");

    var sql = `INSERT INTO ${base} (${keys}) VALUES (${resultado})`;

    var qr_result = conn.query(sql);
    conn.dispose();
    return qr_result;
}