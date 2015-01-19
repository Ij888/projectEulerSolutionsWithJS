//solution to Problem Set 1 on Project Euler

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
var sum = 0;
for(k=0; k<1000; k++){
    if(((k%3)===0)||((k%5)===0)){
    sum += k;
        console.log(sum);
    }
}

