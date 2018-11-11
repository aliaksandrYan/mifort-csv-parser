"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvConfig = {
    csv: [
        {
            name: 'Name',
            type: 'String',
            validators: [
                {
                    type: 'Length',
                    arguments: {
                        min: 2,
                        max: 20
                    }
                }
            ]
        },
        {
            name: 'Surname',
            type: 'String',
            validators: [
                {
                    type: 'Length',
                    arguments: {
                        min: 2,
                        max: 20
                    }
                }
            ]
        },
        {
            name: 'Mail',
            type: 'Email',
            validators: []
        },
        {
            name: 'Age',
            type: 'Integer',
            validators: [
                {
                    type: 'MinMax',
                    arguments: {
                        min: 0,
                        max: 100
                    }
                }
            ]
        },
        {
            name: 'Phone',
            type: 'Phone',
            validators: []
        },
        {
            name: 'DateOfReg',
            type: 'Date',
            validators: [
                {
                    type: 'MaxDate',
                    arguments: {
                        datePattern: 'now'
                    }
                }
            ]
        },
        {
            name: 'Time',
            type: 'Time',
            validators: []
        }
    ],
    db: [
        {
            column: 'Name',
            type: 'VARCHAR(255)'
        },
        {
            column: 'Surname',
            type: 'VARCHAR(255)'
        },
        {
            column: 'Mail',
            type: 'VARCHAR(255)'
        },
        {
            column: 'Age',
            type: 'INT'
        },
        {
            column: 'Phone',
            type: 'VARCHAR(255)'
        },
        {
            column: 'DateofReg',
            type: 'VARCHAR(255)'
        },
        {
            column: 'Time',
            type: 'VARCHAR(255)'
        }
    ]
};
