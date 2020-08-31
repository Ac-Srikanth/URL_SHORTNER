const express = require('express')
const router = express.Router()

const urlsController = require('../app/controllers/urlsController')


router.get('/urls', urlsController.list)
router.post('/urls',urlsController.create)
router.get('/urls/:id', urlsController.show)
router.delete('/urls/:id', urlsController.destroy)
router.put('/urls/:id', urlsController.update)
router.get('/:hash', urlsController.search)

module.exports = router
