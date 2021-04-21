function min(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.min.apply(null, input);
   }

alert(min([15,42,12,1]));
alert(min([-10,-3,0,-80,-1]));