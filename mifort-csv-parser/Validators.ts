export class Validators {
    static Length(validationString: string, args: any): [boolean, string] {
        if (validationString.length > args.max) {
            return [false, validationString + " is too long!"];
        }
        if (validationString.length < args.min) {
            return [false, validationString + " is too short!"];
        }
        return [true, "Correct field"];
    }

    static MinMax(validationNumber: Number, args: any): [boolean, string] {
        if (validationNumber >= args.min && validationNumber <= args.max) {
            return [true, "Correct field"];
        }
        else {
            return [false, validationNumber + " is invalid number!"];
        }
    }

    static MaxDate(date: string, args: any): [boolean, string] {
        const d: Date = new Date(date);
        if (args.datePattern === 'now') {
            let now = new Date();
            if (d.valueOf() >= now.valueOf()) {
                return [false, d + " Wrong date!"];
            }
        }
        return [true, "Correct field"];
    }
}