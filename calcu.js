function init(){
//determinacion de variables
var operadorA;
var operadorB;
var operacion;
var one=document.getElementById("1");
var two=document.getElementById("2");
var tree=document.getElementById("3");
var four=document.getElementById("4");
var five=document.getElementById("5");
var six=document.getElementById("6");
var seven=document.getElementById("7");
var eigth=document.getElementById("8");
var nine=document.getElementById("9");
var zero=document.getElementById("0");

var sum=document.getElementById("opSum");
var res=document.getElementById("opRes");
var mul=document.getElementById("opMul");
var div=document.getElementById("opDiv");

var igual=document.getElementById("opIg");
var display=document.getElementById("display");
var AC=document.getElementById("AC");


//mostrar los numeros en el display

one.onclick= function(e){
	display.textContent = display.textContent  + "1";
}
two.onclick= function(e){
	display.textContent = display.textContent + "2";
}
tree.onclick= function(e){
	display.textContent = display.textContent + "3";
}
four.onclick= function(e){
	display.textContent = display.textContent + "4";
}
five.onclick= function(e){
	display.textContent = display.textContent + "5";
}
six.onclick= function(e){
	display.textContent = display.textContent + "6";
}
seven.onclick= function(e){
	display.textContent = display.textContent + "7";
}
eigth.onclick= function(e){
	display.textContent = display.textContent + "8";
}
nine.onclick= function(e){
	display.textContent = display.textContent + "9";
}
zero.onclick= function(e){
	display.textContent = display.textContent + "0";
}
sum.onclick= function(e){
	operadorA=display.textContent
	operacion="+"
	clean()
}
res.onclick = function(e){
	operadorA = display.textContent
	operacion = "-"
	clean()
}
mul.onclick= function(e){
	operadorA=display.textContent
	operacion="x"
	clean()
}
div.onclick = function(e){
	operadorA = display.textContent
	operacion = "/"
	clean()
}
AC.onclick = function(e){
	reset()
}
igual.onclick = function(e){
	operadorB = display.textContent;
	resolver()
}


// AHORA SE DEFIENE LAS FuNCIONES

function clean(){
	display.textContent = ""
}


function reset(){
	clean()
	operadorA = 0;
	operadorB = 0;
	operacion = ""
}


function resolver(){
var solucion = 0;

switch(operacion){
	case "+":
		solucion = parseFloat(operadorA) + parseFloat(operadorB);
		break;
	case "-":
		solucion = parseFloat(operadorA) - parseFloat(operadorB);
		break;
	case "x":
		solucion = parseFloat(operadorA) * parseFloat(operadorB);
		break;
	case "/":
		solucion = parseFloat(operadorA) / parseFloat(operadorB);
		break;

	}
display.textContent = solucion;



}














}
