const express = require('express')
const os = require('os');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
//app.use(express.json());
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/sum', (req, res) => {
	let sumValue = parseInt(req.body.a) + parseInt(req.body.b);
	res.status(200).json({
	sumValue	
	})
})
app.get('/reverseCase', (req, res) => {
	let strValue = "";
	for (let i = 0; i < req.body.a.length; i++) { // выведет 0, затем 1, затем 2
		if (req.body.a[i] == req.body.a[i].toLowerCase())
		{
			strValue += req.body.a[i].toUpperCase()
		}
		else
		{
			strValue += req.body.a[i].toLowerCase()
		}
	  }
	res.status(200).json({
	strValue	
	})
})
app.get('/reverseArray', (req, res) => {
	let masValue = [];
	for (let i = req.body.a.length; i > -1; i--) { // выведет 0, затем 1, затем 2
		{
			masValue[req.body.a.length-i-1] = req.body.a[i];
		}
	  }
	res.status(200).json({
	masValue	
	})
})
app.options('/', (req, res) => {
	res.send(`options`)
  })
app.head('/', (req, res) => {
	console.log(`head`)
	res.send(`head`)
})

app.post('/', (req, res) => {
	res.send(`post`)
	})


app.patch('/', (req, res) => {
	;
		res.send(`patch`)
	})

app.put('/', (req, res) => {
	;
		res.send(`put`)
	})

app.delete('/', (req, res) => {
	;
		res.send(` delete`)
	})
app.listen(port, () => {
	console.log(` listen`)
  console.log(`Example app listening at http://localhost:${port}`)
})
