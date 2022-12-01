const express = require('express')
const dotenv = require('dotenv').config()
const { db_init } = require('./db/db_init.js')

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 4000


app.get('/', (req, res) => {
	res.send("Welcome to Express")
})

app.post('/api/setting', )

db_init()

app.listen(PORT, () => {
	try {
		console.log(`Server started on port ${PORT}`)
	} catch(e) {
		console.log(`Server failed`, e)
	}
})