module.exports = (app) => {
    app.get('/admin',(req,res) => {
        // req.session.login = 'akira';

        if (req.session.login) {
            res.status(200).json({admin:'Logado'})
        }else{
            res.render('admin/login')
        }
        // console.log(req.session.login);
    })

    app.post('/admin/login',(req,res) => {
        const body = req.body;

        console.log(body);
    })
}