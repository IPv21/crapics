const {Shapes, Circle, Square, Triangle} = require('./shapes');

// testing final. all functioning. ref old branches
describe('Circle', () => {
    it('should make an orange circle', () => {
        const shape = new Circle();
        shape.setColor('orange');
        const expected = '<circle cx=160 cy=100 r=80 style="fill:orange"/>';
        // expect(shape.render()).toEqual(expected);
    });
});


describe('Square', () => {
    it('should make a chartreuse square', () => {
        const shape = new Square();
        shape.setColor('chartreuse');
        const expected = `<rect x="50" y="50" width=200 height=200  style="fill:chartreuse"/>`
        expect(shape.render()).toEqual(expected);

    });
});

describe('Triangle', () => {
    it('should make a purple triangle', () => {
      const shape = new Triangle();
      shape.setColor("purple");
      const expected = `<polygon points="150,50 50,150 250,150" style="fill:purple"/>`
      expect(shape.render()).toEqual(expected);  
    })
})