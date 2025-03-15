/* Name this external file gallery.js */

// Add the tabindex attribute when the page loads
document.addEventListener('DOMContentLoaded', addTabIndex);

function addTabIndex() {
  // Log to confirm the event
  console.log("Page loaded - Adding tabindex attributes");
  
  // Get all images with class 'preview'
  var previewImages = document.getElementsByClassName('preview');
  
  // Loop through each image and add tabindex attribute
  for (var i = 0; i < previewImages.length; i++) {
    previewImages[i].setAttribute('tabindex', i + 1);
    console.log("Added tabindex " + (i + 1) + " to image: " + previewImages[i].alt);
  }
}

function upDate(previewPic) {
  // Log to confirm the event
  console.log("upDate function triggered");
  console.log("Preview pic alt: " + previewPic.alt + ", src: " + previewPic.src);
  
  // Get the div with the id "image"
  var imageDiv = document.getElementById("image");
  
  // Update background preview image
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  
  // Update the text of the preview image
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  // Log to confirm the triggering
  console.log("unDo function triggered");
  
  var imageDiv = document.getElementById("image");
  
  // Revert the background image 
  imageDiv.style.backgroundImage = "url('')";
  
  // Revert the text 
  imageDiv.innerHTML = "Hover or focus on an image below to display here.";
}