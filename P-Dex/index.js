const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOver = require('method-override')
const pokies = require('./controller/pokies')
// const mongoose = require('mongoose')
const app = express()

app.set('port', process.env.PORT || 6009)
app.set('view engine', 'hbs')
app.use('/assets', express.static('public'))
app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions
app.use('/pokies', pokies)
app.use(methodOver('_method'))

app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutsDir: 'views/',
    defaultLayout: 'layout'
}))

app.listen(app.get('port'), () => {
  console.log('For the Horde!')
})

app.get('/', (req, res) => {
  res.render('index')
})

// app.post("/", (req, res) => {
//   res.render("app-welcome", {
//     // title: req.body.title,
//     // description: req.body.description,
//     instructions: req.body.instructions,
//     ingredients: req.body.ingredients
//   })
// })
