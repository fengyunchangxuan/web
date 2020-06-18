var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.fillStyle = 'red';
context.fillRect(0, 0, 200, 175);

context.moveTo(250,100);
context.lineTo(300,200);
context.lineTo(250,175);
context.stroke();

context.beginPath();
context.arc(300,500,100,0*Math.PI,2*Math.PI);
context.closePath();
context.fill();
// context.stroke()