/**
 * branching 
 * 
 * if 
 * if - else
 * if - else if - else
 */

var priceofPhone = 42000, bankBalance = 60000;

if(priceofPhone < bankBalance){
    console.log("All Okay. Process payment");
}
else if(priceofPhone > bankBalance){
    console.log("Sorry, you don't have sufficient balance");
}
else{
    console.log("You will have zero balance after payment.");
}

