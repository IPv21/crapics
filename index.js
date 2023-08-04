const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'Please select 3 alpha-numerics'
    },

    {
        type: 'input',
        name: 'color',
        message: 'Please select the text color'
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape',
        choices: ['Circle', 'Triangle', 'Square']
    },

    {
        type: 'input',
        name: 'background',
        message: 'Please select the background color'
    },

]