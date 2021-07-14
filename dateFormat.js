// const moment = require("moment");


class dateFormat1{
    momentRequire = require('moment');

    
    d = new Date();

    constructor(date){
        if(date == undefined)
            this.d = new Date();
        else
        {
            this.d = new Date(date);
        }
    }
 
    getDateByToTimeString(){
        return this.d.toTimeString();
    }

    getDateByToISOString(){
        return this.d.toISOString();
    }

    getDateByToJSON(){
        return this.d.toJSON();
    }

    // getDateByMoment(){
    //     return this.d.momentRequire.();
    // }


}

module.exports = dateFormat1;  