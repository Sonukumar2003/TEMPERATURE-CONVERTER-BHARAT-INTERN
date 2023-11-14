let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvins = document.getElementById("kelvins");
function celToFar(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}
function farToCel(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}
function kelToCel(){
    let output = ( parseFloat(celsius.value)+ 273.15);
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}