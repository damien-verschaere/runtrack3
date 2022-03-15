function nbrPremier(nbr) {
  for(var i = 2; i < nbr; i++)
    if(nbr%i === 0) return false;
  return nbr > 1;
}

// console.log(nbrPremier(3));
function numbers(){
var a = 4
var b = 4
var verif = nbrPremier(a && b)
if (verif == true) {
    let result= a + b
    return result
}
else console.log( a + 'et' + b + "ne sont pas des nbr premiers")
}
console.log(numbers());