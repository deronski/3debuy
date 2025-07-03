var infoButtons = document.getElementsByClassName("Hotspot");
var infoContainer = document.getElementById("infoContainer");
var infoParagraphs = infoContainer.getElementsByTagName("p");

// Add click event listeners to each button
for (var i = 0; i < infoButtons.length; i++) {
  infoButtons[i].addEventListener("click", function() {
    infoContainer.classList.toggle("show");
    var infoId = this.getAttribute("data-info");
    

    // Show the selected information and hide others
    for (var j = 0; j < infoParagraphs.length; j++) {
      infoParagraphs[j].classList.remove("active");
    }
    
    var selectedInfo = document.getElementById(infoId);
    selectedInfo.classList.add("active");
    infoContainer.classList.add("show");
  });
}
