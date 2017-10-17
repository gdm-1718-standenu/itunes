var img1 = document.querySelector(".image1");
var img2 = document.querySelector(".image2");
var img3 = document.querySelector(".image3");

var middle1 = document.querySelector(".middle1");
var middle2 = document.querySelector(".middle2");
var middle3 = document.querySelector(".middle3");


// Img1
img1.addEventListener("mouseover", function(){
    middle1.style.opacity = 1;
});

img1.addEventListener("mouseout", function(){
    middle1.style.opacity = 0;
});


// Img2
img2.addEventListener("mouseover", function(){
    middle2.style.opacity = 1;
});

img2.addEventListener("mouseout", function(){
    middle2.style.opacity = 0;
});


// Img3
img3.addEventListener("mouseover", function(){
    middle3.style.opacity = 1;
});

img3.addEventListener("mouseout", function(){
    middle3.style.opacity = 0;
});