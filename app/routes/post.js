var datetime = require('node-datetime');
module.exports = (app)=>{
    app.get('/post/:id',(req,res)=>{
        var id = req.params.id;
        
        var cat = app.app.model.read.ExeRead(app, `categorias`);

        var dados = app.app.model.read.ExeRead(app,`post`,`WHERE id = '${id}'`);
        var obj = [];
        for(var i = 0;dados.length > i;i++){
            var autor = app.app.model.read.ExeRead(app, `login`, `WHERE id = '${dados[i].login_id}'`);
            dados[i].autor = autor[0].nome;

            var dt              = datetime.create(dados[i].datac);
            var datac_formatada = dt.format('d/m/Y');
            dados[i].datac      = datac_formatada;

            obj.push(
                dados[i]);
        }

        var comentarios = app.app.model.read.ExeRead(app,`comentarios`,`WHERE id_post = '${id}' ORDER BY id DESC`);
        if (dados.length > 0){
            res.render('pages/post', { dados: obj, cat: cat, comentarios: comentarios});
        }else{
            res.render('pages/404');
        }


    });

    app.post('/comenta/post',(req,res)=>{
        var dados = req.body;
        var dt = datetime.create();
        dados.datec = dt.format('Y-m-d');
        dados.hotac = dt.format('H:M:S');
        var grava = app.app.model.create.ExeCreate(app,`comentarios`,dados);

        if(grava){
            res.redirect(`/post/${dados.id_post}`)
        }else{
            res.render('pages/404');
        }
    })
}