import express from 'express'
const app = express()

app.get('/', function(req, res) {
  res.cookie('a', 2)
  res.redirect(301, '/test1')
})

app.get('/favicon.ico', function(req, res) {
  res.sendStatus(200)
})

app.get('/test1', function(req, res) {
  res.redirect(301, '/test2')
})

app.get('/test2', function(req, res) {
  res.redirect(301, '/test3')
})

app.use('/test3', express.static('./src'))
app.use('/assets', express.static('./dist'))

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})
