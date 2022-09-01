var one={

    val: 10
    
    }
    
     
    
    var proto={
    
    protoVal: 100
    
    }
    
    var two={
    
    val: 100
    
    }
    
     
    
    Object.setPrototypeOf(one,proto)
    
    Object.setPrototypeOf(two,proto)
    
    two.protoVal=50
    
    console.log(one.protoVal);
    
         console.log(two.protoVal)