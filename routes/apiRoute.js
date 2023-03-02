const router = require('express').Router()
const fs = require('fs')
let database = require('../db.json')
// base url on entering this file is localhost3001/api
router.get('/notes', (req, res)=> 
res.json(database)
)
// This is setting up some of the details of new notes. so it knows what the title, text of the note, and id of the note are.
router.post('/notes', (req, res) => {
let newNote = {
    title: req.body.title,
        text: req.body.text,
        id: Math.random()
}
// This adds the new saved note to the db.json file
database.push(newNote)
fs.writeFileSync('./db.json', JSON.stringify(database))
res.json(database)
})
// This is a for loop to delete notes. basically all it does is look at the id of the note you click delete on and saves all of the notes with an id that does not match the one you want to delete and deletes the one that has id that does match.
router.delete('/notes/:id', (req, res) => {
let notesToKeep = []
for (let i = 0; i < database.length; i++) {
if (database[i].id != req.params.id) {
    notesToKeep.push(database[i])
}

}
// This makes it so the notes that are still there after one is deleted will stay there 
database = notesToKeep
fs.writeFileSync('./db.json', JSON.stringify(database))
res.json(database)

 })


// Allows other files in the application to use this code.
module.exports = router