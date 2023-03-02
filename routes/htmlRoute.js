const router = require('express').Router()
const path = require('path')

// These will allow either notes.html or index.html to be viewed depending on where the user is in the application
router.get('/notes', (req, res)=> 
res.sendFile(path.join(__dirname, '../public/notes.html'))
)

router.get('/', (req, res)=> 
res.sendFile(path.join(__dirname, '../public/index.html'))
)
module.exports = router