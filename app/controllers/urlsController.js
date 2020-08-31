const urlsController = {}
const Url = require('../models/url');
// const useragent = require('express-useragent')



urlsController.list = (req,res) => {
    Url.find()
        .then((urls) => {
            res.json(urls)
        })
        .catch((err) =>{
            res.json(err)
        })
}

urlsController.create = (req, res) => {
    const body = req.body
    console.log('in create')
    console.log(body)
    const originalUrl = req.body.originalUrl
    const newurl = new Url(body)
    console.log('new', newurl) 
    newurl.save()
        .then((url)=> {
            console.log('here', url)
            res.json(url)
        })  
        .catch((err)=>{
            res.json(err)
        })    
}

urlsController.show = (req,res) => {
    const id = req.params.id
    Url.findById(id)
        .then((url) => {
            if(url) {
                res.json(url)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

urlsController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Url.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then((url) => {
            if(url) {
                res.json(url)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

urlsController.search = (req, res) => {
    const hashedUrl = req.params.hash   
    let clicks = {
        clickDateTime: new Date().toISOString(),
        browser: req.useragent.browser,
        platform: req.useragent.platform,
        device: req.useragent.isDesktop ? 'desktop' :  'mobile' ,
        ipAddress: req.ip
    }
    Url.findOneAndUpdate({hashedUrl},{$push: {clicks}})
    .then((url) => {
       res.redirect(url.originalUrl)
        
    })
    .catch((err) =>{
        res.json(err)
    })
    
}

urlsController.destroy = (req,res) => {
    const id = req.params.id
    Url.findByIdAndDelete(id)
        .then((url) => {
            if(url) {
                res.json(url)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = urlsController