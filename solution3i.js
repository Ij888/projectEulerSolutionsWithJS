function hpf(n) {
  var max = Math.round(Math.sqrt(n));
  for(var i = max; i >= 2; i--) {
    if(n % i == 0 && hpf(i) == 1) {
      return i;
    }
  }
  return 1;
}

var bigNumbr = 600851475143;
console.log(hpf(bigNumbr));