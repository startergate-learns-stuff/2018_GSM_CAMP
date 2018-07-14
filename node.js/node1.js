var fs = require('fs');

fs.readFile('./data/JavaScript', 'utf8', function(error,data){
  console.log(data);
  console.log(error);
});
