/**
 * if key has special charater double quotes is must
 */
 var shoaly = {
    name : 'Sholay',
    "1cast" : ['Amitab', 'Hema', 'Dharmendra', 'Jaya'],
    "box Office Stats" : {
        "countries" : 10,
        "@collection" : 12300
    },
    addToCollection : function(amount){
        this["box Office Stats"]["@collection"] += amount;
        //shoaly["box Office Stats"]["@collection"] += amount;
    }
};

console.log(typeof shoaly);
console.log(shoaly.name);
console.log(shoaly['1cast'][1]);
console.log(shoaly["box Office Stats"]);

// Two ways
console.log(shoaly["box Office Stats"].countries);
console.log(shoaly["box Office Stats"]["countries"]);

shoaly.addToCollection(22222);
console.log(shoaly["box Office Stats"]["@collection"])