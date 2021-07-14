const http = require('http');
const url = require('url');
const querystring = require('querystring');
const login=require("./user.js");

class myServer extends http.Server{
constructor(){
    super();
    this.on('request', this.requestHandler); 
    this.listen("3015");
}
requestHandler(req, res){
  let url= new URL(req.URL,"http://localhost:3015/?email=harrisleah57@gmail.com&password=123456");
  let user=url.searchParams.get('username');
  let password=url.searchParams.get('password');
  login.login(user,password).then(v=>console.log(JSON.stringify(v)));
  } 
}


var server = new myServer();
