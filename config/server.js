fs      = require('fs');

path    = require('path');

config = JSON.parse(fs.readFileSync('config.json'));
var express             = require('express')
    , cors              = require('cors')
    , bodyParser        = require('body-parser')
    , expressValidator  = require('express-validator')
    , consing           = require('consign');

var app = express();
app.use(cors());
app.options('*', cors());


app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(require('stylus').middleware(path.join(process.cwd(), 'public')));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());


// Load Express Session Module
session = require('express-session');
app.use(session({ // Setup Session Middleware
    secret: config.session.secret,
    saveUninitialized: false,
    resave: false
}));

consing()
    .include('app/routes')
    .include('app/controlles')
    .include('app/model')
    .include('config/dbSyncSql.js')
    .into(app);

module.exports = app;