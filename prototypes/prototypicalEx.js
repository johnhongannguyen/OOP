function HtmlElement(){
    // own method
    this.click = function(){
        console.log('clicked');

    }
}
// in prototype method
HtmlElement.prototype.focus = function(){
    console.log('focused');
}
// create HtmlSelectElement object
function HtmlSelectElement(items = []){
     this.items = items,
    this.addItem = function(item){
        this.items.push(item);
        console.log('item added');

    },
    this.removeItem = function(item){    
        this.items.splice(this.items.indexOf(item),1);
        console.log('item removed');
    }

    this.render = function(){
        return `
        <select>${this.items.map(item => `<option>${item}</option>`).join('')}
        </select>`
    }
  
}

// const renderItem = item => `<option>${item}</option>`


HtmlSelectElement.prototype = new HtmlElement();
HtmlElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src){
    this.src = src;
    this.render = function(){
        return `<img src="${this.src}" />`
    }

}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
const e = new HtmlElement;
console.log(e);

const s = new HtmlSelectElement;
console.log(s);

const d = new HtmlImageElement;
console.log(d);