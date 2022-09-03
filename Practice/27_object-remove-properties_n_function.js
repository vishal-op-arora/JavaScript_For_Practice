/**
 * if key has special charater double quotes is must
 */
 var shoaly = {
    name : 'Sholay',
    "cast" : ['Amitab', 'Hema', 'Dharmendra', 'Jaya'],
    "boxOfficeStats" : {
        "countries" : 10,
        "@collection" : 12300
    },
    addToCollection : function(amount){
        this["box Office Stats"]["@collection"] += amount;
        //shoaly["box Office Stats"]["@collection"] += amount;
    }
};

console.log("Old Object --> ", shoaly, "\n");

delete shoaly.boxOfficeStats;

console.log("New Object --> ", shoaly, "\n");