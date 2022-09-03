/**
 * - Add new property to exising object 
 * - Add new method to the exisitng object
 */
 var shoaly = {
    name : 'Sholay',
    "cast" : ['Amitab', 'Hema', 'Dharmendra', 'Jaya'],
    "box Office Stats" : {
        "countries" : 10,
        "@collection" : 12300
    },
    addToCollection : function(amount){
        this["box Office Stats"]["@collection"] += amount;
        //shoaly["box Office Stats"]["@collection"] += amount;
    }
};

console.log(typeof shoaly, "\n");
console.log("Old Object --> ", shoaly, "\n");

shoaly.villain = "Gabbar Singh";
console.log("New Object --> ", shoaly, "\n");

shoaly.addToCast = function(newMemeber){
    this.cast[this.cast.length] = newMemeber;
}

shoaly.addToCast("Amzad Khan");
console.log("New Object --> ", shoaly);
