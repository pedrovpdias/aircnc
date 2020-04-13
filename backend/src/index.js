const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://<user>:<password>@devclusterpvpd-dzi5a.gcp.mongodb.net/aircnc?authSource=admin&replicaSet=DevClusterPVPD-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
