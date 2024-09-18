// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// Get the element to display the description
var description = document.getElementById("modal-description");

// Add click event to images
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", function() {
        // Set the description text
        description.textContent = this.getAttribute("data-description");
        // Display the modal
        modal.style.display = "block";
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
