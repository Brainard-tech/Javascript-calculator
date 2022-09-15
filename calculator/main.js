setInterval(myTimer, 1000);
function myTimer() {
const d = new Date();
document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
function screen(val){
    document.getElementById('screen').value = val;
};
function shownum(val){
    document.getElementById('screen').value+=val;
}
function solve(){
    try{
        screen(eval(document.getElementById('screen').value))
    }
    catch(e){
        screen('math error')
    }
}
var display = document.getElementById('screen');
function clearme(){
    display.value = display.value.substring( 0 , display.value.length - 1)
}
function del(){
    display.value = ""
}
var d = new Date();
var x = d.toLocaleTimeString();
document.getElementById("date").innerHTML=x;
function squarRoot(){
    display.value = Math.sqrt(parseInt(display.value));
}
document.getElementById("sqrt").addEventListener("click", squarRoot);
function cubeRoot(){
    display.value = Math.cbrt(parseInt(display.value));
}
document.getElementById("sqrt").addEventListener("click", cubeRoot);
function pi(){
display.value = (display.value * Math.PI)
}
document.getElementById('pi').addEventListener("click",pi);

function cos(){
    display.value = Math.cos(display.value * Math.PI/180)
}

function log(){
    display.value = Math.log10(display.value)
}
document.getElementById('log').addEventListener('click',log);

function tan(){
    display.value = Math.log(display.value * Math.PI/180)
}
document.getElementById('tan').addEventListener('click',tan);

function exp(){
    display.value = Math.exp(display.value);
}

function sin(){
    display.value = Math.sin(display.value * Math.PI/180)
}
document.getElementById('sin').addEventListener('click',sin);

function deg(){
    display.value = display.value * (180 / Math.PI)
}
document.getElementById('deg').addEventListener('click',deg);

function percent(){
    display.value = display.value / 100;
}
document.getElementById('percent').addEventListener('click',percent);
    