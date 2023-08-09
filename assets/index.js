const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const {Shape, Triangle, Circle, Square} = require('./shapes');

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        
    }
}

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

function init() {
    inquirer.prompt(questions).then((answers) => {
        const { title, color, shape, background } = answers;

        if (shape === 'Circle') {
            const circle = new Circle();
            circle.setColor(background);
            circle.setText(title);
            circle.setTextColor(color);
            console.log(circle);   // Log the circle element
            console.log(circle.renderSvg());
            write('logo.svg', circle.renderSvg());
        } else if (shape === 'Square') {  // Use 'else if' here instead of 'if'.
            const square = new Square();  // Correct variable name 'square'.
            square.setColor(background);
            square.setText(title);
            square.setTextColor(color);
            console.log(square);  // Log the 'square' object.
            console.log(square.renderSvg());
            write('logo.svg', square.renderSvg());
        }  else if (shape === 'Triangle') {  
            const triangle = new Triangle();  // Correct variable name 'square'.
            triangle.setColor(background);
            triangle.setText(title);
            triangle.setTextColor(color);
            console.log(triangle);  // Log the 'triangle' object.
            console.log(triangle.renderSvg());
            write('logo.svg', triangle.renderSvg());
        }
    });
}
    

    

function write(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);



};



init();