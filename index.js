const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const apiRoutes = require('./api-routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup api routes
app.use('/api', apiRoutes);

// setup static routes
app.use(express.static(path.resolve(__dirname, 'client/build')));
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, 'client/build/index.html')));

app.listen(PORT, () => {
  console.log(`App is listening at PORT ${PORT}`);
});
