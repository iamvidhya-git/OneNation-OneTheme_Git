// line 3 to 48, This code for "4th Part of body" or "section of body" for slide show effect. 
// Use braceses for minimize hole code.
{ var buttons = document.querySelectorAll(".deg-container .deg");
  var slides = document.querySelectorAll(".slide-show-container .box-info");

  // 🔹 Step 1: Basic slide styling
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.height = "0";
    slides[i].style.opacity = "0";
    slides[i].style.overflow = "hidden";
    slides[i].style.transition = "all 0.6s ease";
  }

  // 🔹 Step 2: Set initial (first slide + first button)
  slides[0].style.height = "fit-content";
  slides[0].style.opacity = "1";
  buttons[0].style.backgroundColor = "var(--btn-bg)";  // active button color
  buttons[0].style.color = "white";

  // 🔹 Step 3: Add click functionality
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var clickedClass = this.classList[1]; // like 'eight', 'ten'...

      // First, reset all slides and all buttons
      for (var j = 0; j < slides.length; j++) {
        slides[j].style.height = "0";
        slides[j].style.opacity = "0";
      }

      for (var k = 0; k < buttons.length; k++) {
        buttons[k].style.backgroundColor = "";
        buttons[k].style.color = "";
      }

      // Then, activate the matched slide
      for (var m = 0; m < slides.length; m++) {
        if (slides[m].classList.contains(clickedClass)) {
          slides[m].style.height = "fit-content";
          slides[m].style.opacity = "1";
        }
      }

      // 🔹 Finally, highlight the clicked button
      this.style.backgroundColor = "var(--btn-bg)";
      this.style.color = "white";
    });
  }
}


