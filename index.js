const express = require("express"); //this is bringing in the entire express library

const app = express(); //we just built an API!!! :)
//it's useless in its current state, so we need it to listen

app.get('/', (request, response) => {
    response.send('My first express API...works!');
});  // gives us the REQUESTS and the RESPONSE; Keep Both Together!

app.listen(3000, () => console.log("Listening on port 3000...")); //tells the api to listen to port 3000

//we need to give this a list of requests that this can handle
//let's use a .get request because it can done from a browser
//go to http://localhost:3000
//command click to open the link in vsc

//once you're done, make sure to use ctrl-c to stop it listening