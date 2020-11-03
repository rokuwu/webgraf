var modal = document.getElementById("open-pic");
var img = document.getElementById("team-img");
var modalImg = document.getElementById("team-img-o");
var closeBtn = document.getElementById("close");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

closeBtn.onclick = function(){
    modal.style.display = "none";
}