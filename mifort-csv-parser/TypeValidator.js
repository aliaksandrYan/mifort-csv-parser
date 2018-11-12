"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyTypeValidators = /** @class */ (function () {
    function MyTypeValidators() {
    }
    MyTypeValidators.String = function (name) {
        if (!Number(name)) {
            return [true, "Correct field"];
        }
        else {
            return [false, name + " is invalid name!"];
        }
    };
    MyTypeValidators.Email = function (email) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(email)) {
            return [true, "Correct field"];
        }
        else {
            return [false, email + " is invalid email!"];
        }
    };
    MyTypeValidators.Integer = function (age) {
        if (Number(age)) {
            return [true, "Correct field"];
        }
        else {
            return [false, age + " is invalid age!"];
        }
    };
    MyTypeValidators.Phone = function (phone) {
        var MAX_LENGTH = 30;
        var MIN_LENGTH = 7;
        if (phone.length > MAX_LENGTH) {
            return [false, phone + " too long phone!"];
        }
        if (phone.length < MIN_LENGTH) {
            return [false, phone + " too short phone!"];
        }
        var regEx = new RegExp(/^\+?[\d | \s]*$/);
        if (regEx.test(phone)) {
            return [true, "Correct field"];
        }
        else {
            return [false, phone + " incorrect phone format by RegExp"];
        }
    };
    MyTypeValidators.Date = function (date) {
        var d = new Date(date);
        if (isNaN(d.valueOf())) {
            return [false, date + " Invalid date!"];
        }
        return [true, "Correct field"];
    };
    MyTypeValidators.Time = function (time) {
        var regEx = new RegExp(/^[\d]{2}(:[\d]{2})((\sPM)|(\sAM))?$/);
        if (regEx.test(time)) {
            return [true, "Correct field"];
        }
        else {
            return [false, time + " incorrect time format by RegExp"];
        }
    };
    return MyTypeValidators;
}());
exports.MyTypeValidators = MyTypeValidators;
