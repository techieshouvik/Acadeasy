const express = require('express')
const app = express()
const port = 80
const recs = require('./resources/bcawebtech.json')

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index',{resources:recs});
})

app.get('/resource/:resourcename', (req, res) => {
    res.render('inresource',{resource:recs[req.params.resourcename]});
})

app.get('/resource/:resourcename/pdf', (req, res) => {
    res.render('pdf',{pdfname:req.params.resourcename});
})

app.listen(process.env.PORT || 80, () => {
  console.log('App listening on port 80')
})