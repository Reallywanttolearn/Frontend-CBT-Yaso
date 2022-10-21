const express = require('express');
const app = express();

app.set('views','./views');
app.set('view engine', 'ejs');

const route = require('./router/router');
app.use('/',route);

app.listen(3000,()=>{console.log('server running at https://localhost:3000');});