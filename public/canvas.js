// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(20, 10);
// ctx.stroke();

// ctx.strokeStyle("red") // change color
// ctx.lineWidth(3)    

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();