
document.getElementById('lbsinput').addEventListener('input',function(e){

 let lbs=e.target.value;
 document.getElementById('g-output').innerHTML=lbs/0.0022046;
 document.getElementById('o-output').innerHTML=lbs/2.2046;
 document.getElementById('kg-output').innerHTML=lbs*16;
});