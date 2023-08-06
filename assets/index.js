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
        // const shapeObj = 'newShape';
        let svgElement = '';
        // console.log(title);
        // console.log(shape);
        // console.log(color);
        // console.log(background);
        if (shape === 'Circle') {
            const circle = new Circle();
            circle.setColor(background);
            circle.setText(title);
            circle.setTextColor(color);
            console.log(circle);
            // console.log(circle.render());
            console.log(circle.renderSvg());
            write('logo.svg', circle.renderSvg());
           




        

        }
    })

};

function write(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);



};



init();