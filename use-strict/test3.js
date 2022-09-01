var one={

    val: 10
    
    }
    
     
    
    var proto={
    
    protoVal: 100
    
    }
    
    var two={
    
    val: 100
    
    }
    
     
    
    one.__proto__=proto;
    
    two.__proto__=proto;
    
    two.__proto__.protoVal=50;
    
    console.log(one.protoVal);
    
    console.log(two.protoVal);