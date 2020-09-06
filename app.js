const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.listen(3009)

// クライアントアプリを返す
const client = './client/build'
app.use('/', express.static(client))
