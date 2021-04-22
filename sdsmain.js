///
/// Stef's NodeJS Webserver for Docker & Kubernetes experiments
///
var myip = require('ip');
var myos = require('os');
var mycounter = require("./sdsmodules.js");
var http = require('http');
const hostname = '0.0.0.0';
const port = 8088;
var vhost = myos.hostname;
var vcounter =  mycounter.getcounter(vhost);

//const args = process.argv.slice(2);

const server = http.createServer((req, res) => {
  /// 
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<b>Sample Web App</b><br>");
  res.write("<img src='logo.png' alt='HPE logo'><br>");
  res.write("<b>** New Tech In Action - Summer 2021 edtion**</b><br><br>");
  res.write("      Node Name: " + vhost +  "<br>");
  res.write("   Node Address: " + myip.address() + " port: "+ server.address().port + "<br>");
  res.write("        Counter: " + vcounter + "<br>");
  res.write("    Time is now: " + Date().toString()+ "<br>");
  var urldata = req.url;   
  if (urldata == "/exit") { 
    res.write("*** webserver stopped ***<br>");
    console.log("*** webserver stopped ***");
    res.end(); 
    process.exit();
  }
  res.write("URL data: " + urldata);
  res.end();
  vcounter =  mycounter.getcounter(vhost); 
});

server.listen(port, hostname, () => {
  console.log("Server listing on port " + port.toString() );
});

var callback = function (err, data) {
  if (err) return console.error(err);
  console.log(data);
};