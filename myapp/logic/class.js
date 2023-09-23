module.exports = class numberFrequensSetsClass{
    constructor(value){
        this.numberValue = value;
        this.befor = new Map();
        this.after = new Map();
    }

    getBeforMap(){
        return this.befor;
    }

    getAfterMap(){
        return this.after;
    }

    getNumberValue(){
        return this.numberValue;
    }

    findBefor(valueToFind){
        for(let i=0; i < this.befor.size; i++){
            if(this.befor.has(valueToFind)){
                return true;
            }
        }
        return false; 
    }
    
    findAfter(valueToFind){
        for(let i=0; i < this.after.size; i++){
            if(this.after.has(valueToFind)){
                return true;
            }
        }
        return false; 
    }

    addBeforValue(beforV){

        switch(this.findBefor(beforV)){
            case true:
                this.befor.set(beforV, this.befor.get(beforV) + 1);
                break;
            case false:
                this.befor.set(beforV,1);
                break;
        }
        
    }

    addAfterValue(afterV){

        switch(this.findAfter(afterV)){
            case true:
                this.after.set(afterV, this.after.get(afterV) + 1);
                break;
            case false:
                this.after.set(afterV,1);
                break;
        }
        
    }

    getBeforValue(){
        
        

        for (var [key, value] of this.befor) {
            console.log("Befor Number: " + key + " frequency drawn: " + value);
        }

        // for(let k of this.befor.keys()){
        //     //console.log("keys: " + k);

        //     $("document").ready(function() {
        //         $("#look-up-sequens-freq-befor").append("<button id=\"Freq\" class=\"button button1\">Befor: " + k + "</button>");
        //         //$("#look-up-sequens-freq").append("<button id=\"" +  k + "\" class=\"button button1\">Befor: " + k + "</button>");
        //         //$("#look-up-nummber-freq").append("<p id=\"" +  k + "\" >" + this.after. + "</p>");
        //     });
        // }
        
        // for(let v of this.befor.values()){
        //     //console.log("Values: " + v);

        //     $("document").ready(function() {
        //         $("#look-up-freq-befor").append("<button id=\"Freq\" class=\"button button1\">Freq: " + v + "</button>");
        //         //$("#look-up-nummber-freq").append("<p id=\"" +  v + "\" >" + v +  "</p>");
        //     });

        // }



    }

    getAfterValue(){
        
        

        /** for console debug */
        for (var [key, value] of this.after) {
            console.log("After Number: " + key + " frequency drawn: " + value);
        }

        // for(let k of this.after.keys()){
        //     //console.log("keys: " + k);

        //     $("document").ready(function() {
        //         $("#look-up-sequens-freq-after").append("<button id=\"Freq\" class=\"button button1\">After: " + k + "</button>");
        //         //$("#look-up-nummber-freq").append("<p id=\"" +  k + "\" >" + this.after. + "</p>");
        //     });
        // }
        
        // for(let v of this.after.values()){
        //     //console.log("Values: " + v);

        //     $("document").ready(function() {
        //         $("#look-up-freq-after").append("<button id=\"Freq\" class=\"button button1\">Freq: " + v + "</button>");
        //         //$("#look-up-nummber-freq").append("<p id=\"" +  v + "\" >" + v +  "</p>");
        //     });
            
        // }

        // return this.after;
    }
}

