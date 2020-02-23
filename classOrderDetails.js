import {Cdate} from "../../../shared/classes/Date"
import {Chour} from "../../../shared/classes/Hour"


class OrderDetails{
    constructor(){
        this.details = {
            "isConcrete"  : Boolean,
            "isPump"      : Boolean,  
            "city"        :String,
            "street"      :String,
            "number"       :String,
            "date"         : new Cdate(),
            "hour"         : new Chour(),
            "castingType"  : String,
            "concreteType" : String,
            "amount"       : Number,
            "pumpType"      : String,
            "isDailyHose"    : Boolean,
            "rubberHose"     : Number
        }
    }
    
}

export{OrderDetails}