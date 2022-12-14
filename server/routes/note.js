const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await Note.getAllNotes();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/registernote', async (req, res) => {
    try {
      let notes = await Note.registerNote(req.body);
      res.send({success: "note created"})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  router.post('/getnotes', async(req,res)=> {
    try {
       console.log(req.body);
      const note =await Note.getNote(req.body);
      res.json(note);
  
    }
    catch(err){
      res.status(401).send({message: 'error in note'});
    }
  })
  

  .put('/edit', async (req, res) => {
    try {
      let notes = await Note.editNote(req.body);
      res.send({success: "edited note content"})
      // res.send({...notes, password: undefined});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      Note.deleteNote(req.body);
      res.send({success: "We'll Miss You... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

module.exports = router;
