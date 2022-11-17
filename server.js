'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.


// First challenge
const bcrypt = require('bcrypt');

// Second challenge
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log('test', res);
  });

  bcrypt.compare('another-password', hash, (err, res) => {
    console.log('test2', res);
  });
});





//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
