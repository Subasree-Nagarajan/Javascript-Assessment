function find_duplicate_in_array(arra1) {
    let object = {};
    let result = [];

    arra1.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}

alert(find_duplicate_in_array([16, 2, -2, 3, 5, 3, 7, 8, 2, 7, 71, 3, 6]));