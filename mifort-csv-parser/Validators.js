"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validators = /** @class */ (function () {
    function Validators() {
    }
    Validators.Length = function (validationString, args) {
        if (validationString.length > args.max) {
            return [false, validationString + " is too long!"];
        }
        if (validationString.length < args.min) {
            return [false, validationString + " is too short!"];
        }
        return [true, "Correct field"];
    };
    Validators.MinMax = function (validationNumber, args) {
        if (validationNumber >= args.min && validationNumber <= args.max) {
            return [true, "Correct field"];
        }
        else {
            return [false, validationNumber + " is invalid number!"];
        }
    };
    Validators.MaxDate = function (date, args) {
        var d = new Date(date);
        if (args.datePattern === 'now') {
            var now = new Date();
            if (d.valueOf() >= now.valueOf()) {
                return [false, d + " Wrong date!"];
            }
        }
        return [true, "Correct field"];
    };
    return Validators;
}());
exports.Validators = Validators;
