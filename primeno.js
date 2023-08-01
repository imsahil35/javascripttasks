var n = 20;
for(var i=2;i<n;i++){
    var c = 0;
    for(var j=1;j<=i;j++){
        if(i%j==0){
            c++;
        }
    }
    if(c==2){
        console.log(i);
    }
}