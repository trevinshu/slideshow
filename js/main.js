// your js here...
let images = ["mountain1.jpg", "mountain2.jpg", "mountain3.jpg"];
let currentImg = 0;
document.querySelector(".carousel>img").src = "images/" + images[0];

document.querySelector(".carousel").addEventListener("click", function (e) {
  let target = e.target;
  if (target.classList.contains("control")) {
    console.log("control clicked...");
  }
});

document.querySelector(".carousel").addEventListener("click", function (e) {
  let target = e.target;
  if (target.classList.contains("control")) {
    if (target.classList.contains("next")) {
      // move to the next index in the array
      currentImg += 1;
    } else if (target.classList.contains("prev")) {
      // move to the previous index in the array
      currentImg -= 1;
    }
    // display the new current image
    document.querySelector(".carousel>img").src =
      "images/" + images[currentImg];
  }
});
