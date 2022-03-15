function chiffre(){
    for (let i = 1; i < 151; i++){
        console.log(i);
        if (i%15==0){
            console.log("FizzBuzz") 
        };
        
        if (i%5==0)
            console.log("buzz")
        
        if (i%3==0)
            console.log("fizz")
        

    }
}
chiffre();
