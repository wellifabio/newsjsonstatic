require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const cors = require('cors')

const router = require('./src/routes')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

app.listen(PORT, () => {
    console.log("API respondendo em http://localhost:" + PORT)
})