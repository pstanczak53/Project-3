var images = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"];
var caption = ["slide1", "slide2","slide3","slide4"];

var imageNumber = 0;
var imageLenght = images.length -1;

 function changeImage(x) {
	 imageNumber += x;
	 
	  if (imageNumber > imageLenght){
		  imageNumber = 0;		  
	  }
	  
	  if (imageNumber < 0){
		  imageNumber = imageLenght;
	  }
	  
	  
	  document.getElementById("slideshow").src = images [imageNumber];
	  document.getElementById("caption").innerHTML = caption[imageNumber];
	  
	  return false;	 
	 
 }
 
  function autoRun() {
	  setInterval("changeImage(1)", 3000);
	  
  }