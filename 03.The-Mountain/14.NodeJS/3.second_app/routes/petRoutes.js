const jsonfile = require("jsonfile");
const file_path = "./DB/users.json";

module.exports = app => {

  app.get("/pets", (req, res) => {
    // jsonfile reading
    jsonfile.readFile("./DB/users.json", function(err, content) {
      // send file contents back to sender
      res.send(content);
    });
  });

};