var datetime = require('node-datetime');
module.exports = (app)=>{
    app.get('/', (req, res) => {
        var id = req.params.id;
        var conn = app.config.dbSyncSql();

        var dados_categoria = conn.queueQuery(`SELECT * FROM categorias WHERE st = 0`)();
        var dados_post = conn.queueQuery(`SELECT * FROM post`)();
        var obj = [];
        for(var i = 0;dados_post.length > i; i++){
            var dt = datetime.create(dados_post[i].datac);
            var datac_formatada = dt.format('d/m/Y');
            dados_post[i].datac = datac_formatada;
            dados_post[i].resumo = dados_post[i].corpo.substring(0,200);
            obj.push(dados_post[i]);
        }
        console.log(obj);
        res.render('index', { dados: dados_categoria, post: obj});
    });
}