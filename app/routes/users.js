module.exports = (app)=>{
    app.get('/users', (req, res) => {
        
        res.render('users');
    });
}