const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/views.routes');
const bodyParser = require('./middleware/bodyParser');

const [hostname, port] = ['127.0.0.1', 3000]; // or ['localhost', 3000]

app.use(bodyParser) // Use the middleware you have imported
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

// Tell the Express where to find the 'views' folder
app.set('views', path.join(__dirname, '../src/views'));

app.use('/', routes); // Consume routes you have imported

// Access assets (favicon, main.js, about.html …) from app (& EJS files) without relative path
app.use(express.static('dist/client'));

// Start the Express server on port 3000
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});