let btn_getNumberFreq;

for(let i=1; i < 49; i++){

    btn_getNumberFreq = document.getElementById(i);
    btn_getNumberFreq.addEventListener('click', event => {
      
      let test_element = document.querySelectorAll(`[id^="Freq"]`);
        
        for(let i =0; i < test_element.length; i++){
            test_element[i].remove();
        }
        
      inFunc_lookUpNummberFreq(i);

    });

}

//////// ex_buttons //////////

for(let x=1; x < 6; x++){

    btn_getNumberFreq = document.getElementById("ex_" + x);
    btn_getNumberFreq.addEventListener('click', event => {
        //inFunc_lookUpNummberFreq(x);
        console.log("Button ex is pressed: " + x );
    });

}



/*
const container = document.querySelector('.container');
console.log("test con: " + container);

const setAttribute = function (el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  };
  
  class Obj {
    
    constructor(x, y, colorBlue, color) {
      this.x = x;
      this.y = y;
      this.style= colorBlue; //"color: " + color + ";";
      this.background = color; //this.color = color;
    }

    getStyle(){
        return this.style
    }

    getBackground(){
        return this.background;
    }
  
    _createObj() {
      const obj = document.createElement('div');
      setAttribute(obj, {
        display: 'inline-block',
        width: '100px',
        height: '100px',
        border: '5px outset red',
        backgroundcolor: this.getBackground(),
        style: this.getStyle(),//"color: blue;",
        Text: "this is a test on color",
      });
      return obj;
    }
    _placeObj() {
      container.appendChild(this._createObj());
      //container.appendChild("<p>Hello World!</p>");
      container.appendChild(this._createObj());
    }
  }
  
  const obj = new Obj(1,2,"color: blue;", "blue");//1, 2, 'blue'.toString);
  //console.log("style is : " + obj.getStyle() );
  obj._placeObj();
*/
