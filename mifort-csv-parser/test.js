"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeValidator_1 = require("./TypeValidator");
var Validators_1 = require("./Validators");
var Main_1 = require("./Main");
var WriteToDb_1 = require("./WriteToDb");
var config_1 = require("./config");
var assert = require('assert');
describe('MyTypeValidators.String', function () {
    describe('#MyTypeValidators.String(name: string)', function () {
        it('it should return tuple [false, name + " is invalid name!"] when the name is a number', function () {
            assert.equal(TypeValidator_1.MyTypeValidators.String("123")[0], false);
        });
    });
});
describe('MyTypeValidators.Email', function () {
    describe('#MyTypeValidators.Email(email: string)', function () {
        it('it should return tuple [false, email + " is invalid email!"] when the email is incorrect', function () {
            assert.equal(TypeValidator_1.MyTypeValidators.Email("123456")[0], false);
        });
    });
});
describe('MyTypeValidators.Integer', function () {
    describe('#MyTypeValidators.Integer(age: string)', function () {
        it('it should return tuple [false, age + " is invalid age!"] when the age is not a number', function () {
            assert.equal(TypeValidator_1.MyTypeValidators.Integer("asdfweqwe")[0], false);
        });
    });
});
describe('MyTypeValidators.Phone', function () {
    describe('#MyTypeValidators.Phone(phone: string)', function () {
        it('it should return tuple [false, phone + " is invalid phone!"] when the phone is not a phone format', function () {
            assert.equal(TypeValidator_1.MyTypeValidators.Phone("asdfweqwe")[0], false);
        });
    });
});
describe('MyTypeValidators.Date', function () {
    describe('#MyTypeValidators.Date(date: string)', function () {
        it('it should return tuple [false, date + " is invalid date!"] when the date is incorrect', function () {
            assert.equal(TypeValidator_1.MyTypeValidators.Date("this is not a date")[0], false);
        });
    });
});
describe('MyTypeValidators.Time', function () {
    describe('#MyTypeValidators.Time(time: string)', function () {
        it('it should return tuple [false, time + " is invalid time!"] when the time is incorrect', function () {
            assert.equal(TypeValidator_1.MyTypeValidators.Time("this is not a time")[0], false);
        });
    });
});
describe('Validators.Length', function () {
    describe('#Validators.Length(validationString: string,args JS object)', function () {
        it('it should return tuple [false, validationString + " is too short/long!"] when the validationString is too short/long', function () {
            assert.equal(Validators_1.Validators.Length("this is too long string", { max: 5, min: 3 })[0], false);
        });
    });
});
describe('Validators.MinMax', function () {
    describe('#Validators.MinMax(validationNumber: Number,args JS object)', function () {
        it('it should return tuple [false, validationNumber + " is invalid number!"] when the validationNumber is out if min-man range', function () {
            assert.equal(Validators_1.Validators.MinMax(123, { max: 5, min: 3 })[0], false);
        });
    });
});
describe('Validators.MaxDate', function () {
    describe('#Validators.MaxDate(date: String,args JS object)', function () {
        it('it should return tuple [false, date + " wrong date!"] when the date is not suit to the datePattern', function () {
            assert.equal(Validators_1.Validators.MaxDate("11.11.2025", { datePattern: 'now' })[0], false);
        });
    });
});
describe('validateAll', function () {
    describe('#validateAll(array of JS objects results with parsed CSV fields,array of JS objects config with config objects )', function () {
        it('it should return array of objects with valid fields', function () {
            assert.equal((Main_1.validateAll([{ Name: "1234", Age: 15 }], config_1.csvConfig.csv)).toString().valueOf(), [{ Age: 15 }].toString().valueOf());
        });
    });
});
describe('getSqlInsert', function () {
    describe('#getSqlInsert(JS object with fields to DB)', function () {
        it('it should return string which represent SQL query to insert valid fields into table', function () {
            //console.log(getSqlInsert({Name:"Dima"}));
            assert.equal(WriteToDb_1.getSqlInsert({ Name: "Dima" }).valueOf(), "INSERT INTO people_6 (Name) VALUES ('Dima')".valueOf());
        });
    });
});
