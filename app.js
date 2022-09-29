const express = require('express')
const app = express()
const port = 3000
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})