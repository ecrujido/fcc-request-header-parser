var express = require("express");
var app = express();


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204


// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});


// your first API endpoint...
app.get("/api/hello", function(req, res) {
    res.json({ greeting: "hello API" });
});


app.get("/api/whoami", (req, res) => {
    const reqIP = req.header("x-forwarded-for") || req.socket.remoteAddress;
    const reqLanguage = req.headers["accept-language"];
    const reqSoftware = req.headers["user-agent"];
  
    res.json({
      ipaddress: reqIP,
      language: reqLanguage,
      software: reqSoftware,
    });
  });
  
  const PORT = process.env.PORT || 3000;
  
  // listen for requests :)
  const listener = app.listen(PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });  