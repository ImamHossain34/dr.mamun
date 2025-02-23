
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
    
    // Disable scrolling
    document.body.style.overflow = "hidden";
}

// Function to slide back
function slideBack() {
    console.log("Closing slider."); // Debugging log
    slider.style.right = "-100%";  // Move slider out of view
    darkscreen.style.opacity = "0";  // Fade out darkscreen
    setTimeout(() => {
        darkscreen.style.display = "none";  // Hide it completely after transition
    }, 400); // Match CSS transition duration
    
    // Re-enable scrolling
    document.body.style.overflow = "auto";
}


    // Attach event listeners
    openButton.addEventListener("click", slideOpen);
    closeButtons.forEach(button => button.addEventListener("click", slideBack));

    console.log("Event listeners added successfully."); // Debugging log
});


window.addEventListener("scroll", function () {
    let customerService = document.querySelector(".customerservice");

    if (window.scrollY > 30) { // Change 50 to any scroll threshold you prefer
        customerService.style.right = "10px";
    } else {
        customerService.style.right = "-48px";
    }
});




// /////// form input red and black //////////

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let inputs = document.querySelectorAll(".form-input");
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add("error");
            isValid = false;
        } else {
            input.classList.remove("error");
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
        this.reset();
    }
});


// /////// form input red and black end ///////////


function customerService() {
    const customerServiceButton = document.querySelector('.customerservice');
    const formContainer = document.querySelector('.form-container');
    const overlay = document.querySelector('.overlay');
  
    // Show the form when clicking on the .customerservice button
    customerServiceButton.addEventListener('click', (event) => {
      // Prevent the click event from propagating to the overlay
      event.stopPropagation();
  
      if (formContainer.classList.contains('show')) {
        // Hide the form container with smooth transition
        formContainer.classList.remove('show');
        formContainer.classList.add('hide');
        overlay.classList.remove('show');
  
        setTimeout(() => {
          formContainer.style.display = 'none';
          overlay.style.display = 'none';
          document.body.classList.remove('no-scroll'); // Re-enable scrolling
        }, 300); // Time must match the duration of the transition
      } else {
        // Show the form container with smooth transition
        formContainer.style.display = 'block';
        overlay.style.display = 'block';
  
        setTimeout(() => {
          formContainer.classList.remove('hide');
          formContainer.classList.add('show');
          overlay.classList.add('show');
        //   document.body.classList.add('no-scroll'); // Disable scrolling
        // Disable scrolling
        document.body.style.overflow = "hidden";

        }, 10);
      }
    });
  
    // Close the form if clicking anywhere outside the form (on the overlay)
    overlay.addEventListener('click', () => {
      formContainer.classList.remove('show');
      formContainer.classList.add('hide');
      overlay.classList.remove('show');
  
      setTimeout(() => {
        formContainer.style.display = 'none';
        overlay.style.display = 'none';
        // document.body.classList.remove('no-scroll'); // Re-enable scrolling
        // Re-enable scrolling
        document.body.style.overflow = "auto";

      }, 300);
    });
  }
  
  // Call the function to initialize the event listener
  customerService();
  
