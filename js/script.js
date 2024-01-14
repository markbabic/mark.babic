/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['AI agency owner', 'Junior Software Developer', 'Crypto Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== contact to e-mail ====================*/

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken : "9e80068e-7e49-4cb0-b0df-6916dd57709b",  
        Host: "smtp.elasticemail.com",
        Username: "markbabic987@gmail.com",
        Password: "960A37A51934D558A8B5B902EE1596F4A8DD",
        To: 'markbabic987@gmail.com',
        From: "markbabic987@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
             }
        }
    );
}



/*
function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });        
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    sendEmail();
}); 
*/

/*
function checkInputs() {
    const inputs = document.querySelectorAll('.input-box input, .input-box textarea');
    let isValid = true;

    inputs.forEach(input => {
        const errorText = input.nextElementSibling; // This assumes that your error message element is right after the input

        // Check validity on form submit
        if (input.value.trim() === "") {
            input.classList.add('error');
            errorText.style.display = 'block'; // Show the error message
            isValid = false; // Mark the form as invalid
        } else {
            input.classList.remove('error');
            errorText.style.display = 'none'; // Hide the error message
        }

        // Real-time validation on 'keyup'
        input.addEventListener("keyup", () => {
            if (input.value.trim() !== "") {
                input.classList.remove('error');
                errorText.style.display = 'none';
            } else {
                input.classList.add('error');
                errorText.style.display = 'block';
            }
        });        
    });

    return isValid;
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the normal form submission

    // If the form is valid after checking inputs, send the email
    if (checkInputs()) {
        sendEmail();
    } else {
        // If not, errors are already shown on the form
        // Optionally, you can focus the first invalid input for better user experience
        const firstInvalidInput = form.querySelector('.input-box .error');
        if (firstInvalidInput) {
            firstInvalidInput.focus();
        }
    }
});

*/


/*
// This function checks all inputs and shows error messages
function checkInputs() {
    const inputs = document.querySelectorAll('.input-box input, .input-box textarea');
    let isValid = true;

    inputs.forEach(input => {
        const errorText = input.nextElementSibling; // Assuming this is the span.error-text
        if (input.value.trim() === "") {
            input.classList.add('error');
            errorText.style.display = 'block'; // Show the error message
            isValid = false; // Mark the form as invalid
        } else {
            input.classList.remove('error');
            errorText.style.display = 'none'; // Hide the error message
        }
    });
*/ 

    /*
    // Inside your checkInputs function
const message = document.getElementById('message');
const messageErrorText = message.nextElementSibling;

if (message.value.trim() === "") {
  message.classList.add('error');
  messageErrorText.style.display = 'block';
} else {
  message.classList.remove('error');
  messageErrorText.style.display = 'none';
}

    return isValid; // Return whether the form is valid
}
*/

/*
// This event listener checks the form upon submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Always prevent default to handle submission manually

    const isFormValid = checkInputs(); // Check if form is valid

    // If the form is valid, call sendEmail
    if (isFormValid) {
        sendEmail();
    }
    // Otherwise, do nothing (errors are already shown)
});
*/


/*
form.addEventListener('submit', (e) => {
    // First, check if the form is valid
    const isFormValid = checkInputs();

    // If the form is valid, call sendEmail
    if (isFormValid) {
        sendEmail();
    } else {
        // If it's not valid, prevent the form from submitting
        e.preventDefault();
    }
});
*/


/*
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the normal form submission
    if (checkInputs()) { // If the form is valid after checking inputs
        sendEmail(); // Then send the email
    }
});
*/

/*==================== rotating logo ====================*/
/*
const logo = document.getElementById('rotating-logo');

// Start the rotation
function startRotation() {
  logo.style.animationPlayState = 'running';
}

// Stop the rotation
function stopRotation() {
logo.style.animationPlayState = 'paused';
}

// Start the rotation as soon as the page loads
window.onload = startRotation;

 } 
 */

 function checkInputs() {
    try {
        const inputs = document.querySelectorAll('.input-box input, .input-box textarea');
        let incompleteInputs = [];

        inputs.forEach(input => {
            const errorText = input.nextElementSibling; // Assumes error message element is right after the input

            if (input.value.trim() === "") {
                input.classList.add('error');
                if (errorText) errorText.style.display = 'block'; // Show the error message
                incompleteInputs.push(input.name);
            } else {
                input.classList.remove('error');
                if (errorText) errorText.style.display = 'none'; // Hide the error message
            }
        });

        if (incompleteInputs.length > 0) {
            let alertMessage = `The following input(s) are incomplete: ${incompleteInputs.join(', ')}. Please fill them out.`;
            alert(alertMessage);
            return false;
        }

        return true;
    } catch (error) {
        console.error("CheckInputs ERROR: ", error);
        return false;
    }
}

// Attach the keyup event listener outside the function
document.querySelectorAll('.input-box input, .input-box textarea').forEach(input => {
    input.addEventListener("keyup", () => {
        const errorText = input.nextElementSibling;
        if (input.value.trim() !== "") {
            input.classList.remove('error');
            if (errorText) errorText.style.display = 'none';
        } else {
            input.classList.add('error');
            if (errorText) errorText.style.display = 'block';
        }
    });
});


form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the normal form submission
    if (checkInputs()) { // If the form is valid after checking inputs
        sendEmail(); // Then send the email
    }
});