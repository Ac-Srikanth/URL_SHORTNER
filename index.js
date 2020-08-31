const express = require('express');

const configureDb = require('./config/database')
const router = require('./config/routes')
const cors = require('cors');
const app = express();
const expressip = require('express-ip')
const useragent = require('express-useragent')
// app.use(expressip().getIpInfoMiddleware);
app.use(useragent.express());
app.use(cors())
// app.set('trust proxy', true)
const port = 3055
app.use(express.json())
app.use(router)

configureDb()
app.get('/', (req,res)=> {
    res.send('URL SHORTNER')
})

app.listen(port, ()=> {
    console.log(`Server Listening on port ${port}`)
})