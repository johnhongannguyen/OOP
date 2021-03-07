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
  
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlElement.prototype.constructor = HtmlSelectElement;
const e = new HtmlElement;
console.log(e);

const s = new HtmlSelectElement;
console.log(s);