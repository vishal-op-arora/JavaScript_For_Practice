var objs=[

    {name: "One", val:1},

    {name: "Two", val:3},

    {name: "Three", val:5}

]

objs.forEach(function(item){

console.log(item.val);

});

var mapObj=objs.map(function(item){

return item.val*item.val*item.val;

})

 

mapObj.forEach(function(item){

console.log(item);

});