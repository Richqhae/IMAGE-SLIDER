var slideImg = document.getElementById("slideImg");
var images = new Array(
    "images/img-1.jpg",
    "images/img-2.jpg",
    "images/img-3.jpg",
    "images/img-4.png"
);
var len = images.length;
var i=0;

function slider(){
    if (i > len -1){
        i=0;
    }
    slideImg.src =images[i];
    i++;
    setTimeout("slider()", 3000);
}
