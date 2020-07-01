// var express = require("express");
// var app = express();
// var path = require('path');
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
//     console.log('index');
//   }
// );
// app.get("/amp-authorization.json", (req, res, next) => {
//     var readerId = req.query.rid;
//     if (!readerId) {
//       res.sendStatus(400);
//       return;
//     }
//     console.log('Authorization response:', readerId);
//     //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
//    }
// );

// app.use(express.static(__dirname + '/img'));
// app.listen(3000, () => {
//  console.log("Server running on port http://localhost::3000");
// });

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get("/amp-form", (req, res, next) => {
    var email = req.body;

    console.log('form email', email);
    //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   }
);

router.get("/amp-authorization", (req, res, next) => {
    var readerId = req.query.rid;
    if (!readerId) {
      res.sendStatus(400);
      return;
    }
    console.log('Authorization response:', readerId);
    //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   }
);

router.post("/amp-pingback", (req, res, next) => {
    var readerId = req.query.rid;
    if (!readerId) {
      res.sendStatus(400);
      return;
    }
  
    //var paywallAccess = PaywallAccess.getOrCreate(readerId);
    //var viewedUrl = req.query.url;
    //var referrer = req.query.ref;
    // count the view in case of metering
    // paywallAccess.registerView(referrer, viewedUrl);
    // console.log("paywallAccess views: " + paywallAccess.numViews);
    //console.log("FCF: ", referrer, paywallAccess.viewedUrlsByReferrer[referrer]);
    console.log("FCF: ", readerId);
    res.status(200).end();
   }
);

//add the router
app.use('/img', express.static(__dirname + '/img'));
//Store all HTML files in view folder.
app.use('/js', express.static(__dirname + '/js'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(process.env.port || 9000);

console.log('Running at http://localhost:9000');