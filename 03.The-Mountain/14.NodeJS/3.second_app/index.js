// import the NPM dependancy package
const express     = require("express");
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");

// initialise express() inside of your app variable
const app = express();

// parse body of incoming json requests
app.use(bodyParser.json());

// import route- and model modules and pass your app
require("./models/Pet")(app);
require("./routes/petRoutes")(app);

try {
mongoose.connect("mongodb+srv://username:123password@cluster0.2sv4t.gcp.mongodb.net/node-training?retryWrites=true&w=majority");
} catch (e) {
  console.log(e);
}

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we're connected!");
// });

// choose what port on which to run the server
const PORT = 5000;

// use the app variable and listen on the port
app.listen(PORT, () => {
  console.log(`Server running`);
});
