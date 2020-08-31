const mongoose = require('mongoose')
const validate = require('validator')
const sh = require('shorthash')


//url schema
const Schema = mongoose.Schema
const urlSchema = new Schema({
    title: {
        type: 'String',
        required: true
    },
    originalUrl: {
        type: 'String',
        required: true,
        validate : {
            validator: function(value) {
                return validate.isURL(value)
            },
            message: function () {
                return 'URL must be a valid URL'
            }
        }
    },
    hashedUrl: {
        type: 'String'
    },
    clicks: [{
        clickDateTime: {
            type: 'Date'
        },
        ipAddress: {
            type: 'String'
        },
        browser: {
            type: 'String'
        },
        platform: {
            type: 'String'
        },
        device: {
            type: 'String'
        }
        
    }],
    createdAt: {
        type: 'String',
        default: Date.now()
    }
})
urlSchema.pre('save', function(next) {
    this.hashedUrl = sh.unique(this.originalUrl)
    this.createdAt = new Date().toISOString()
    console.log('in pre save')
    next()
})

const Url = mongoose.model('URL Shortner', urlSchema)
module.exports = Url