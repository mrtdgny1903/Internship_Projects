/**
 * Put this file in the root directory for your project and it should work.
 * run: node loopback-discover-database.js
 * 
 */
var fs = require('fs');
var loopback = require('loopback');

var commonFolder = './common';
var modelsFolder = commonFolder + '/models';

//TODO: Change to the correct path for your server folder if needed
var serverPath = '../server/';
var modelConfig = require(serverPath + 'model-config');
var dataSources = require(serverPath + 'datasources');

//TODO: dataSourceName should be the name of your datasource in server/datasources.json 
var dataSourceName = 'db';

var ds = loopback.createDataSource('mssql', dataSources[dataSourceName]);

initMain();

function initMain() {
  // Check if common/models exists
  // If not, create them and build models from database
  if (!fs.existsSync(commonFolder)) {
    fs.mkdirSync(commonFolder);
  }
  if (!fs.existsSync(modelsFolder)) {
    fs.mkdirSync(modelsFolder);
  }

  discoverAndCreate();
}

function discoverAndCreate(callback) {
  //Will print the schema of the database
  ds.discoverModelDefinitions(function (err, models) {
    models.forEach(function (def, index, array) {
      // def.name ~ the model name
      ds.discoverSchema(def.name, null, function (err, schema) {
        schema.name = schema.name.toLowerCase();
        fs.writeFile('common/models/' + def.name + '.json', prettyJSON(schema), function (err) {
          if (err) throw err;
          console.log('It\'s saved!');
          //If last, then save
          if (index === array.length - 1) {
            saveAndExposeSchemas();
          }
        });
        addSchema(schema.name);
      });
    });
  });
}

function addSchema(schema) {
  modelConfig[schema] = {
    dataSource: dataSourceName,
    public: true,
    $promise: {},
    $resolved: true
  };
}

function saveAndExposeSchemas() {
  fs.writeFile('../server/model-config.json', prettyJSON(modelConfig), function (err) {
    if (err) throw err;
    console.log('Schemas are exposed!');
  });
}

function prettyJSON(str) {
  return JSON.stringify(str, null, '  ');
}