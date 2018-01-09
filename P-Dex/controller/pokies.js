// import { error } from 'util';

const express = require('express')
const Pokie = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  Pokie.find({})
    .then((pokies) => {
      res.render('pokies', {
        pokies: pokies})
    .catch((err) => {
      console.log(err)
    })
    })
})

router.post('/', (req, res) => {
  Pokie.create(req.body.Pokie)
    .then(Pokie => {
      res.redirect(`/Pokie/${Pokie.name}`)
    })
})

module.exports = router
