const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/subscribers')
const db = mongoose.connection
db.on('error', () => console.log('Connectted to Database'))
db.once('open', () => console.log('Server Started'))

app.listen(300, () => console.log('Server Started'))