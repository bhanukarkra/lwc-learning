import { LightningElement } from 'lwc';
// class is blurprint or template which ontaines attributes and methods
// class MObile - (size, color, cost), method(calling, cancelling, send)
// xiomi - let xiomiA1 = new Mobile()
//xiomiA1.size =
export default class HelloWorld extends LightningElement {
    // attribute/fields/properties and behaviour/function/methods
    name="Gaurav" //chnage name agai
    test="jkh"
    
    nameHandler(event){ 
        console.log(event.target.value)
        this.name = event.target.value
    }
}
