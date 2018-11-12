"use strict";
var csv = require('fast-csv');
var fs = require('fs');
import {MyTypeValidators} from "./TypeValidator";
import {csvConfig} from "./config";
import {Validators} from "./Validators";
import {writeToDb} from "./WriteToDb";

var results = [];
var stream = fs.createReadStream("data.csv");
csv
    .fromStream(stream, {headers: true})
    .on("data", function (data) {
        results.push(data);
    })
    .on("end", function () {
        writeToDb(validateAll(results, csvConfig.csv), csvConfig.db);
    });

export function validateAll(results: any[], config: any[]): any[] {
    let validFieldsToDatabase = [];
    for (let object in results) {
        let validObjects = {};
        for (let key in results[object]) {
            for (let configItem in config) {
                let value = results[object][key];
                if (config[configItem].name === key) {
                    let type = config[configItem].type;
                    if (typeof MyTypeValidators[type] === 'function') {
                        if (MyTypeValidators[type](value)[0]) {
                            let validators = config[configItem].validators;
                            if (validators.length > 0) {
                                let validatorType = validators[0].type;
                                if (typeof Validators[validatorType] === 'function') {
                                    let args = validators[0].arguments;
                                    let result = Validators[validatorType](value, args);
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
                            console.log(MyTypeValidators[type](value)[1])
                        }
                    }
                }
            }
        }
        validFieldsToDatabase.push(validObjects);
    }
    return validFieldsToDatabase;
}
