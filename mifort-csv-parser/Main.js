"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csv = require('fast-csv');
var fs = require('fs');
var TypeValidator_1 = require("./TypeValidator");
var config_1 = require("./config");
var Validators_1 = require("./Validators");
var WriteToDb_1 = require("./WriteToDb");
var results = [];
var stream = fs.createReadStream("data.csv");
csv
    .fromStream(stream, { headers: true })
    .on("data", function (data) {
    results.push(data);
})
    .on("end", function () {
    WriteToDb_1.writeToDb(validateAll(results, config_1.csvConfig.csv), config_1.csvConfig.db);
});
function validateAll(results, config) {
    var validFieldsToDatabase = [];
    for (var object in results) {
        var validObjects = {};
        for (var key in results[object]) {
            for (var configItem in config) {
                var value = results[object][key];
                if (config[configItem].name === key) {
                    var type = config[configItem].type;
                    if (typeof TypeValidator_1.MyTypeValidators[type] === 'function') {
                        if (TypeValidator_1.MyTypeValidators[type](value)[0]) {
                            var validators = config[configItem].validators;
                            if (validators.length > 0) {
                                var validatorType = validators[0].type;
                                if (typeof Validators_1.Validators[validatorType] === 'function') {
                                    var args = validators[0].arguments;
                                    var result = Validators_1.Validators[validatorType](value, args);
                                    if (result[0]) {
                                        validObjects[key] = value;
                                    }
                                    else {
                                        console.log(result[1]);
                                    }
                                }
                            }
                            else {
                                validObjects[key] = value;
                            }
                        }
                        else {
                            console.log(TypeValidator_1.MyTypeValidators[type](value)[1]);
                        }
                    }
                }
            }
        }
        validFieldsToDatabase.push(validObjects);
    }
    return validFieldsToDatabase;
}
exports.validateAll = validateAll;
