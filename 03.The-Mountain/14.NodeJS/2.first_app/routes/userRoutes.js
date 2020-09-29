const jsonfile = require("jsonfile");
const file_path = "./DB/users.json";

module.exports = app => {

  app.get("/users", (req, res) => {
    // jsonfile reading
    jsonfile.readFile("./DB/users.json", function(err, content) {
      // send file contents back to sender
      res.send(content);
    });
  });
  
  app.get("/user", (req, res) => {

    let user;
    let email = req.query.email;

    jsonfile.readFile(file_path, function(err, content) {

      for (var i = 0 ; i < content.length; i++) {
        if (content[i].email === email) {
          console.log("found user" + content[i]);
          user = content[i];
        }
      }
  
      res.send(user);
    });

  });

  app.post("/users/new", (req, res) => {

    let {email, username} = req.body;
    // console.log({email, username});

    jsonfile.readFile(file_path, function(err, content) {
      
      content.push({email, username});
      console.log({email, username}.email + {email, username}.username + " added to DB");

      jsonfile.writeFile(file_path, content, function(err) {
        console.log(err);
      });

      res.sendStatus(200);
    });

  });

  app.delete("/users/destroy", (req, res) => {

    let email = req.body.email;

    jsonfile.readFile(file_path, function(err, content) {

      for (let i = 0; i < content.length; i++) {
        if (content[i].email === email) {
          console.log("removing " + content[i].email + " from DB");
          content.pop(i);
        }
      }

      jsonfile.writeFile(file_path, content, function(err) {
        console.log(err);
      });

      res.sendStatus(200);
    });

  });

  app.put("/user", (req, res) => {

    let user;
    let username = req.body.username;
    let email = req.query.email;

    jsonfile.readFile(file_path, function(err, content) {
      for (let i = 0; i < content.length; i++) {
        if (content[i].email === email) {
  
          console.log("updated user " + email + " has now username : " + username);
  
          user = content[i];
          user.username = username;
  
        }
      }
  
      jsonfile.writeFile(file_path, content, function(err) {
        console.log(err);
      });
  
    });

    res.send(user);
  });

};
