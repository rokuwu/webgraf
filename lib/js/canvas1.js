var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var grd;

ctx.font = "25px Times"
ctx.textAlign = "center"

//1.sor

//kék
grd = ctx.createLinearGradient(0,0,0,200);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"yellow");

ctx.beginPath();
ctx.arc(100,100,70,0,2*Math.PI);
//ctx.strokeStyle = "blue";
ctx.fillStyle = grd;
ctx.fill();

ctx.fillStyle = "white";
ctx.fillText("Kék",100,100);

ctx.stroke();

//fekete
grd = ctx.createLinearGradient(0,0,0,200);
grd.addColorStop(0,"green");
grd.addColorStop(0.5,"black")
grd.addColorStop(1,"yellow");

ctx.beginPath();
ctx.arc(250,100,70,0,2*Math.PI);
//ctx.strokeStyle = "black";
ctx.fillStyle = grd;
ctx.fill();

ctx.fillStyle = "white";
ctx.fillText("Fekete",250,100);

ctx.stroke();

//piros
grd = ctx.createLinearGradient(0,0,0,200);
grd.addColorStop(0,"red");
grd.addColorStop(1,"green");

ctx.beginPath();
ctx.arc(400,100,70,0,2*Math.PI);
//ctx.strokeStyle = "red";
ctx.fillStyle = grd;
ctx.fill();

ctx.fillStyle = "white";
ctx.fillText("Piros",400,100);

ctx.stroke();

//2.sor

//sárga
grd = ctx.createLinearGradient(0,70,0,270);
grd.addColorStop(0,"yellow");
grd.addColorStop(0.5,"black")
grd.addColorStop(1,"blue");

ctx.beginPath();
ctx.arc(175,170,70,0,2*Math.PI);
//ctx.strokeStyle = "yellow";
ctx.fillStyle = grd;
ctx.fill();

ctx.fillStyle = "white";
ctx.fillText("Sárga",175,170);

ctx.stroke();

//zöld
grd = ctx.createLinearGradient(0,70,0,270);
grd.addColorStop(0,"green");
grd.addColorStop(0.5,"black")
grd.addColorStop(1,"red");

ctx.beginPath();
ctx.arc(322,170,70,0,2*Math.PI);
//ctx.strokeStyle = "green";
ctx.fillStyle = grd;
ctx.fill();

ctx.fillStyle = "white";
ctx.fillText("Zöld",322,170);

ctx.stroke();