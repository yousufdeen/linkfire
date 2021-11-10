const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
const cors = require('cors');
const moment = require("moment-timezone");
const path = require('path');
const multer = require('multer');
const forms = multer();
const cron = require('node-cron');
const fs = require('fs');
const twilio = require('twilio');
const app = express();
const server = require('http').createServer(app);

const musicRouter = require('./app/routes/music.routes');


const db = require('./app/models');
const Role = db.role;
const User = db.user;
const Group = db.group;

const whitelist = [];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      //callback(new Error('Not allowed by CORS'));
      callback(null, true);
    }
  }
}

/*const corsOptions = {
	origin: "http://localhost:8081, http://localhost:4200"
};*/

app.use(cors(corsOptions));

app.use(bodyParser.json({ extended: false, parameterLimit:50000, limit: '500mb' }));
//app.use(forms.array());
app.use(bodyParser.urlencoded({ extended: false, parameterLimit:50000, limit: '500mb' }));
app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets')));
app.use('/attachments/receipt', express.static(path.join(__dirname, 'attachments', 'receipt')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/api/music', musicRouter);


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.set('socketio', {});
const client = {};

db.sequelizeIns.sync().then(async (result) => {

	console.log('db connected');
	const port = process.env.PORT || '3000';
	server.listen(port, async () => {
		console.log('server listening on port ' + port);
	});
	
});




