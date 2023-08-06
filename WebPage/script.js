function updateDateTime() {
    var currentDate = new Date();
    var options = { hour: '2-digit', minute: '2-digit', hour12: true, year: 'numeric', month: '2-digit', day: '2-digit'};
    var formattedDate = currentDate.toLocaleDateString('en-UK', options);
    document.getElementById('currentDateTime').textContent = formattedDate;
}

// Call the function once on page load to show the initial date and time
updateDateTime();

// Optionally, you can update the date and time periodically
setInterval(updateDateTime, 1000);

var color = false;

function changeMode() {
    if (color === true) {
        color = false;
        changeToDarkMode();
    }
    else {
        color = true;
        changeToLightMode();
    }
}

function changeToLightMode() {
    var elements = document.getElementsByClassName("bg-dark");

    const bodyElement = document.body;
    bodyElement.style.backgroundImage = 'url("images/background.jpg")';
    changeAllElementColors(bodyElement, "black");

    var menus = document.querySelectorAll('.dropdown-menu')
    
    Array.from(menus).forEach(function(menu) {
        menu.classList.remove('bg-dark');
        menu.classList.add('bg-light');
    });

    const images = document.getElementsByClassName("img-st");

    // Change the image src for light mode
    Array.from(images).forEach(function(image) {
        const src = image.src;
        console.log(src);
        const darkSrc = src.replace(".png", "-dark.png");
        image.src = darkSrc;
    });

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("bg-light");
        elements[i].classList.remove("bg-dark");
    }

}

function changeToDarkMode() {
    var elements = document.getElementsByClassName("bg-light");

    const bodyElement = document.body;
    bodyElement.style.backgroundImage = 'url("images/background-dark.jpg")';
    changeAllElementColors(bodyElement, "white");

    var menus = document.querySelectorAll('.dropdown-menu')
    
    Array.from(menus).forEach(function(menu) {
        menu.classList.remove('bg-light');
        menu.classList.add('bg-dark');
    });

    const images = document.getElementsByClassName("img-st");

    // Change the image src for light mode
    Array.from(images).forEach(function(image) {
        const src = image.src;

        const lightSrc = src.replace("-dark.png", ".png");
        image.src = lightSrc;
    });

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("bg-dark");
        elements[i].classList.remove("bg-light");
    }
}


function changeAllElementColors(element, color) {
    // Change the color of the current element
    element.style.color = color;
    
    // Get all child elements of the current element
    const children = element.children;
    
    // Recursively change the color for all child elements
    for (let i = 0; i < children.length; i++) {
        changeAllElementColors(children[i], color);
    }
}