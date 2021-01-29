const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

var path = require('path');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));

// const usersRoutes = require('./routes/users');
const indexRoutes = require('./routes/index');

// app.use(routes);

app.use('/', require('./routes/index.js'));
// app.use('/users', require('./routes/users.js'));

// Start our server 
app.listen(PORT, function() {
  console.log(`Server listening on: http://localhost:${PORT}`);
});