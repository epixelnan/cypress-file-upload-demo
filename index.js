// Nandakumar Edamana
// 2021-11-10

const express = require('express')
const efu     = require('express-fileupload')

var app = express()
app.use(efu())

app.get('/', (req, res) => {
	serveForm(req, res)
});

app.post('/', (req, res) => {
	processForm(req, res)
});

app.listen(3000)

function serveForm(req, res) {
	res.send('<form method="POST" enctype="multipart/form-data"><input type="file" id="img" name="img"><button>Upload</button></form>')
}

function processForm(req, res) {
	if(!req.files || typeof(req.files.img) === 'undefined')
		return res.status(400).send('<p>No files found in the form.</p>')

	res.send('<p>Success! mimetype: ' + req.files.img.mimetype + '</p>')
}
