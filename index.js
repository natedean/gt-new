const express = require('express');
const path = require('path');
const apiRoutes = require('./api-routes');

const app = express();

const PORT = process.env.PORT || 3001;

// setup api routes
app.use('/api', apiRoutes);


// setup static routes
app.use(express.static(path.resolve(__dirname, 'client/build')));
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, 'client/build/index.html')));

app.listen(PORT, () => {
  console.log(`App is listening at PORT ${PORT}`);
});
