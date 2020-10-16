var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");

var btnPlus = document.getElementById("btnPlus");
var btnMinus = document.getElementById("btnMinus");
var btnMulti = document.getElementById("btnMulti");
var btnDiv = document.getElementById("btnDiv");
var btnDot = document.getElementById("btnDot");
var btnEqual = document.getElementById("btnEqual");
var btnOpenPar = document.getElementById("btnOpenPar");
var btnClosePar = document.getElementById("btnClosePar");
var btnClear = document.getElementById("btnClear");
var inputText = document.getElementById("inputText");

var expr = "";
var exprError = false;
var equalFlage = false;

btn0.addEventListener("click",function() {
    expr+="0";
    inputText.value = expr;
    
});

btn1.addEventListener("click",function() {
 
    expr+="1";
    inputText.value = expr;
   
});

btn2.addEventListener("click",function() {

    expr+="2";
    inputText.value = expr;

});

btn3.addEventListener("click",function() {
 
    expr+="3";
    inputText.value = expr;
});

btn4.addEventListener("click",function() {
  
    expr+="4";
    inputText.value = expr;

});

btn5.addEventListener("click",function() {
  
    expr+="5";
    inputText.value = expr;
  
});

btn6.addEventListener("click",function() {

    expr+="6";
    inputText.value = expr;
 
});

btn7.addEventListener("click",function() {
  
    expr+="7";
    inputText.value = expr;

});

btn8.addEventListener("click",function() {
  
    expr+="8";
    inputText.value = expr;
});

btn9.addEventListener("click",function() {
 
    expr+="9";
    inputText.value = expr;

});

btnPlus.addEventListener("click",function() {
    expr+="+";
    inputText.value = expr;
});

btnMinus.addEventListener("click",function() {
    expr+="-";
    inputText.value = expr;
});

btnMulti.addEventListener("click",function() {
    expr+="*";
    inputText.value = expr;
});

btnDiv.addEventListener("click",function() {
    expr+="/";
    inputText.value = expr;
});

btnDot.addEventListener("click",function() {
    expr+=".";
    inputText.value = expr;
    
});

btnEqual.addEventListener("click",function() {

    try {
        var val = eval(expr);
        inputText.value = val;
        expr = val;
        equalFlage = true;
    } catch (error) {
        inputText.value = "Error";
        expr = "";
        exprError = true;
    }
    
});

btnOpenPar.addEventListener("click",function() {
  
    expr+="(";
    inputText.value = expr;
    
});

btnClosePar.addEventListener("click",function() {


    expr+=")";
    inputText.value = expr;
  
});

btnClear.addEventListener("click",function() {
    if(exprError || inputText.value == "Infinity") {
        expr = "";
        exprError = false;
    } else if (equalFlage){
        equalFlage = false;
        expr = "";
    } else {
        expr = expr.substring(0, expr.length - 1);
    }
    
    inputText.value = expr;
});
