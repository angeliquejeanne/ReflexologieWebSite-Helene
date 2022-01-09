// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }


document.addEventListener("click", (e) => {
  const elem = e.target;
  if (elem.id==="myImg") {
    modal.style.display = "block";
    modalImg.src = elem.dataset.biggerSrc || elem.src;
    captionText.innerHTML = elem.alt; 
  }
})

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}