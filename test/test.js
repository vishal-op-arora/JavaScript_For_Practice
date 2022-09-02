var obj={

    Name: "Temp",
    
    Price: 70,
    
    increasePrice: function(){
    
    console.log(this.Name);
    
    }
    
    }
    
     
    
    var secondObj=obj.increasePrice;
    
    secondObj();
    
    obj.increasePrice();