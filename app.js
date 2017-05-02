var Snoocore = require('snoocore');

// Our new instance associated with a single account.
// It takes in various configuration options.
var reddit = new Snoocore({
  userAgent: '/u/username myApp@3.0.0', // unique string identifying the app
  oauth: {
    type: 'script',
    key: 'DiEDzXXssf1-KQ', // OAuth client key (provided at reddit app)
    secret: 'Vu7DfBXd1eUUIR07ZdHeyWEukNw', // OAuth secret (provided at reddit app)
    username: 'lepsa007', // Reddit username used to make the reddit app
    password: 'kevin123', // Reddit password for the username
    // The OAuth scopes that we need to make the calls that we 
    // want. The reddit documentation will specify which scope
    // is needed for evey call
    scope: [ 'identity', 'read', 'vote' ]
  }
});

reddit('/api/v1/me').get().then(function(result) {

});
reddit('/r/nofap/comments/64q70v').get().then(function(result) {
  var str = JSON.stringify(result);
  str = JSON.stringify(result, null, 4); // (Optional) beautiful indented output.
  console.log(str); // Logs output to dev tools console.
  console.log(JSON.parse(JSON.stringify(result)));
});