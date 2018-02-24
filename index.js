const app = require('./server/app');

const PORT = process.env.PORT || 3000;

// run app
app.listen(PORT, () => {
  console.log(`App is listening at PORT ${PORT}`);
});
