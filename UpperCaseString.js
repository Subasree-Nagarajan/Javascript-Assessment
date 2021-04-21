function uppercase(str){

let array1 = str.split(' ');
let newarray1 = [];
let x;
  
for(x = 0; x < array1.length; x++){
    newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
}
return newarray1.join(' ');
}
alert(uppercase("different is better"));