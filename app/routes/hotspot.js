module.exports = (app) => {
    app.post('/hotspot',(req,res) => {
        const body = req.body;

        console.log(body.mac);
        console.log(body.ip);
        console.log(body.username);
        console.log(body['link-login']);
        console.log(body['link-orig']);
        console.log(body.error);
        
        console.log("---------------------->");
        console.log(body)

        res.render('pages/hotspot');
    })
}
