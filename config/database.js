const mongoose = require('mongoose')

const configureDb = () => {
    mongoose.connect('mongodb://localhost:27017/url-shortner', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Connected to MongoDB Database')
    })
    .catch((err)=>{
        console.log('Error', err)
    })
}

module.exports = configureDb