const express = require('express');
const controller = require('../controllers/storyController');

const router = express.Router();


// GET /stories: send all stories to the user

router.get('/', controller.index);


// GET /stories/new: send html form for creating a new story
router.get('/new', controller.new);

// POST /stories: create a new story
router.post('/', controller.create);

// GET /stories/:id: send details identified by the id
router.get('/:id', controller.show);

// UPDATE
// GET /stories/:id/edit: send html form for editing an existing story
router.get('/:id/edit', controller.edit);

// POST
// PUT /stories/:id: update the story identified by the id
router.put('/:id', controller.update);

// DELETE /stories/:id: delete the story identified by the id
router.delete('/:id', controller.delete);

// exporting 
module.exports = router;





/*
routes defined before controllers
// GET /stories: send all stories to the user

router.get('/', (req, res) =>{
    res.send('send all stories');
});


// GET /stories/new: send html form for creating a new story
router.get('/new', (req, res) => {
    res.send('send the new form');
});

// POST /stories: create a new story
router.post('/', (req, res) => {
    res.send('Created a new story');
});

// GET /stories/:id: send details identified by the id
router.get('/:id', (req, res) => {
    res.send('send story with id ' + req.params.id);
});

// UPDATE
// GET /stories/:id/edit: send html form for editing an existing story
router.get('/:id/edit', (req, res) => {
    res.send('send the edit form ');
});

// POST
// PUT /stories/:id: update the story identified by the id
router.get('/:id', (req, res) => {
    res.send('update story with id ' + req.params.id);
});

// DELETE /stories/:id: delete the story identified by the id
router.get('/:id', (req, res) => {
    res.send('delete story with id ' + req.params.id);
});
*/