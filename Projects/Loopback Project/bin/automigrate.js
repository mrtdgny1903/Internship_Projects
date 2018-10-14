var path = require('path');

//var sqlite3 = require('sqlite3').verbose();

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.lite;
var calib = require(path.resolve(__dirname, './common/models/calib'))
ds.automigrate('calib', function (err) {
  if (err) throw err;

  var attributes = [
    {
      id: '111'

    }

  ];

  var count = attributes.length;
  attributes.forEach(function (calib) {
    app.models.calib.create(calib, function (err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});
