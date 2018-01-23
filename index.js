const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOver = require('method-override')
const pokies = require('./controller/pokies')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(methodOver('_method'))
app.use('/assets', express.static('public'))
app.use(bodyParser.json()) // handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

app.set('port', process.env.PORT || 6009)
app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'layout'
}))

app.use('/', pokies)

app.listen(app.get('port'), () => {
  console.log('For the Horde!')
})
