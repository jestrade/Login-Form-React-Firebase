const express = require("express");   
 
const path = require("path");   

  const app = express();

  app.use(express.static(__dirname + "/public")); 
  
  
  app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  })
  
  // Initialize the app.
  const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
    
  });