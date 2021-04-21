let is_weekend =  function(date1){
    let dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } 
}

alert(is_weekend('Nov 15, 2020'));
alert(is_weekend('Apr 17, 2021'));
alert(is_weekend('Apr 21, 2021'));