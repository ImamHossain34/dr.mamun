document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const darkscreen = document.querySelector(".darkscreen");
    const openButton = document.querySelector(".contactandmenu .threedot");
    const closeButtons = document.querySelectorAll(".crosssvg, .darkscreen");

    if (!slider || !darkscreen || !openButton) {
        console.error("One or more elements not found.");
        return;
    }

    // Function to slide open
    function slideOpen() {
        console.log("Opening slider."); // Debugging log
        slider.style.right = "0";
        darkscreen.style.display = "block";  // Make it visible again
        setTimeout(() => {
            darkscreen.style.opacity = "1"; // Fade in smoothly
        }, 10);
    }

    // Function to slide back
    function slideBack() {
        console.log("Closing slider."); // Debugging log
        slider.style.right = "-100%";  // Move slider out of view
        darkscreen.style.opacity = "0";  // Fade out darkscreen
        setTimeout(() => {
            darkscreen.style.display = "none";  // Hide it completely after transition
        }, 400); // Match CSS transition duration
    }

    // Attach event listeners
    openButton.addEventListener("click", slideOpen);
    closeButtons.forEach(button => button.addEventListener("click", slideBack));

    console.log("Event listeners added successfully."); // Debugging log
});
