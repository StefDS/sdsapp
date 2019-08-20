exports.getcounter = function() {
    var fs = require('fs');
    /// reading File
    console.log("Open './data/app.log' file");
    var data = fs.readFileSync('./data/app.log').toString();
    console.log("file content is: " + data);
    var thiscounter = parseInt(data.substr(8));
    thiscounter += 1;
    ///
    /// writing file with one line= "counter: 1" to start
    ///
    var thiswrite = "counter:" + thiscounter.toString();
//    fswrite.writeFilesync('./app.log', thiswrite); 
    fs.writeFile("./data/app.log", thiswrite, function(err) {
    if(err) {
        console.log(err);
        return 0;
    }
    console.log(thiswrite);
    }); 
    return thiscounter;
  };