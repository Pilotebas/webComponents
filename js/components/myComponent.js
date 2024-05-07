// class h7{
//     size = "1.3rem";
//     #font_family = "cursive";
//     constructor(font){
//         this.setFontFamily = font
//     }
//     get getFontFamily(){
//         return this.#font_family;
//     }
//     set setFontFamily(font){
//         this.#font_family = font;
//     }
// }
// let obj = new h7("Arial");
// // obj.setFontFamily = "Arial";
// console.log(obj.getFontFamily);
// class HTMLElement

class h7 extends HTMLElement{
    size = "1.3rem";
    #font_family = "cursive";
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.textContent = "soy la etiqueta h7"
    }
}

customElements.define("my-h7", h7)