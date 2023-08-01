var a = parseInt(prompt("Enter 1st no"));
var b = parseInt(prompt("Enter 2nd no"));
var n = parseInt(prompt("Enter choice"));
switch(n){
    case 1: console.log("addition is :"+a+b);
    break;
    case 2: console.log("subtraction is :"+a-b);
    break;
    case 3: console.log("multiplication is :"+a*b);
    break;
    case 4: console.log("division is :"+a/b);
    break;
    case 5: console.log("remainder is :"+a%b);
    break;
    case 6: 
    var facta = 1;
    for(var i =1;i<=n;i++){
    facta = facta*i;
    }
    console.log(fact);
    var factb = 1;
    for(var i =1;i<=n;i++){
    factb = factb*i;
    }
    console.log(factb);
    break;
}