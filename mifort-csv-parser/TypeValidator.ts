export class MyTypeValidators {
    static String(name: string): [boolean, string] {
        if (!Number(name)) {
            return [true, "Correct field"];
        }
        else {
            return [false, name + " is invalid name!"];
        }
    }

    static Email(email: string): [boolean, string] {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(email)) {
            return [true, "Correct field"];
        }
        else {
            return [false, email + " is invalid email!"]
        }
    }

    static Integer(age: string): [boolean, string] {
        if (Number(age)) {
            return [true, "Correct field"];
        }
        else {
            return [false, age + " is invalid age!"];
        }
    }

    static Phone(phone: string): [boolean, string] {
        const MAX_LENGTH = 30;
        const MIN_LENGTH = 7;
        if (phone.length > MAX_LENGTH) {
            return [false, phone + " too long phone!"];

        }
        if (phone.length < MIN_LENGTH) {
            return [false, phone + " too short phone!"];
        }
        let regEx = new RegExp(/^\+?[\d | \s]*$/);
        if (regEx.test(phone)) {
            return [true, "Correct field"];
        }
        else {
            return [false, phone + " incorrect phone format by RegExp"];
        }
    }

    static Date(date: string): [boolean, string] {
        const d: Date = new Date(date);
        if (isNaN(d.valueOf())) {
            return [false, date + " Invalid date!"];
        }
        return [true, "Correct field"];
    }

    static Time(time: string): [boolean, string] {
        let regEx = new RegExp(/^[\d]{2}(:[\d]{2})((\sPM)|(\sAM))?$/);
        if (regEx.test(time)) {
            return [true, "Correct field"];
        }
        else {
            return [false, time + " incorrect time format by RegExp"];
        }

    }

}