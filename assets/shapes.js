class Shape {
    

    construction() {
        this.color = '';
        this.text = '';
        this.textColor= '';
    }
  
    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

  
    
}

class Circle extends Shape {
    render() {
        return `<circle cx="160" cy="100" r="80" style="fill:${this.color}"/>`; 

    }
    renderSvg() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${this.render()}

      
        <text x="150" y="125" font-size="60" text-anchor="middle" style="fill:${this.textColor}>${this.text}"</text>
      
      </svg>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}"/>`;
    }
    renderSvg() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${this.render()}

      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
      
      </svg>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width=200 height=200  style="fill:${this.color}"/>`;
    }
    renderSvg() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${this.render()}

      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
      
      </svg>`
    }
}

module.exports = {
    Shape,
    Circle,
    Triangle,
    Square,
};