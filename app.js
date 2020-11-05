window.onload = () => {
    // Sticky navbar variables;
    var navbarOffset = header.offsetTop;
    
    // Dynamic typing variables
    var typedTextSpan = document.querySelector(".typed-text");
    var cursorSpan = document.querySelector(".cursor");
    const textArray = ["CS Student", "SoftEng Intern", "Lifelong Learner", "Game Dev Hobbyist", "Design Enthusiast", "Curious Human", "Tea Snob"]
    const typingDelay = 160;
    const erasingDelay = 70;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    /* Particles-js loading  */
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    /* projects page variables */
    const projects = {};

    // Web project
    projects["quote-generator"] = {
        name: "Quote Generator",
        image: "images/quote.png",
        description: "A website which displays some of my favourite quotes. \
        Features twitter webhook and changing background transitions.",
        link: "https://davidngu3.github.io/random-quote-generator/",
        gitlink: "https://github.com/davidngu3/random-quote-generator" 
    };

    // Web project 2
    projects["js-calculator"] = {
        name: "js-calculator",
        image: "images/js-calculator.png",
        description: "A pure html/js/css calculator \
        featuring all basic mathematical operators, decimal point system, \
        sign inversion and backspace/clear functionality. \
        Warning: Do not divide by zero!",
        link: "https://davidngu3.github.io/js-calculator/",
        gitlink: "https://github.com/davidngu3/js-calculator"
    };

    // Game project
    projects["popa"] = {
        name: "Popa",
        image: "images/popa.png",
        description: "Winner of Google DSC Retro Game Hackathon. \
        Inspired by old-school arcade games Space Invaders and Tetris, \
        the player must shoot incoming bats(!) \
        Complete with self-produced sound effects and pixel art. \
        Ready player one?",
        link: "https://davidngu3.github.io/Popa/",
        gitlink: "https://github.com/davidngu3/Popa"
    };

    // Reserved for website
    projects["website"] = {
        name: "Personal Website",
        image: "images/website.png",
        description: "Personal website to showcase software development background. \
        Built with pure HTML/CSS/JS/💖",
        link: "https://davidngu3.github.io/",
        gitlink: "https://github.com/davidngu3/davidngu3.github.io"
    };

    // Experience page variables
    const experiences = {};

    // Education 
    experiences["monash"] = {
        name: "Monash University",
        title: "Bachelor of Computer Science",
        date: "Feb 2018",
        description: "Expected Grad. 2022",
        icon: "images/monash.png"
    }

    // Work experience 1
    experiences["agilent"] = {
        name: "Agilent Technologies",
        title: "Software Engineer Intern",
        date: "Feb 2020",
        description: "12 month internship",
        icon: "images/agilent.png"
    }

    // Work experience 2
    // TBD

    // Sticky navbar logic
    window.addEventListener("scroll", function() {
        var header = document.getElementById("header");
        header.classList.toggle("sticky", window.scrollY > navbarOffset);
    })
        
    // Dynamic typing logic
    function type() {
        if (charIndex < textArray[textArrayIndex].length) { 
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay); // recursive call again after 200ms
        }
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) { 
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1); // remove last char
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++; // go to next string
            if (textArrayIndex >= textArray.length) { // wrap around to start of array
                textArrayIndex = 0;
            }
            setTimeout(type, newTextDelay + 300);
        }
    }

    setTimeout(type, newTextDelay + 200);

    // projects page logic
    var projectsDiv = document.getElementById("projects");

    for (var key of Object.keys(projects)) {
        var project = projects[key];

        // wrapper div
        var card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-aos", "fade-down-right");
        card.setAttribute("data-aos-offset", "200");
        card.setAttribute("data-aos-delay", "50");
        card.setAttribute("data-aos-duration", "1000");
        card.setAttribute("data-aos-easing", "ease-in-out-sine");

        var title = document.createElement("h2");
        title.textContent = project["name"];

        var image = document.createElement("img");
        image.src = project["image"];

        var descriptionBox = document.createElement("div");
        descriptionBox.className = "cardDescriptionBox";

        var description = document.createElement("p");
        description.textContent = project["description"];
        
        var link = document.createElement("a");
        link.setAttribute("target", "_blank");
        link.href = project["link"];
        link.className = "fas fa-arrow-circle-right";
        link.classList.add("cardLink")

        var gitLink = document.createElement("a");
        gitLink.href = project["gitlink"];
        gitLink.setAttribute("target", "_blank");
        gitLink.className = "fab fa-github";
        gitLink.classList.add("cardLink");

        descriptionBox.appendChild(description);
        descriptionBox.appendChild(link);
        descriptionBox.appendChild(gitLink);

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(descriptionBox);

        projectsDiv.appendChild(card);
    }

    // Experience page logic
    var expContainer = document.getElementById("exp-container");
    
    for (var key of Object.keys(experiences)) {
        var experience = experiences[key];

        // wrapper div
        var expCard = document.createElement("div");
        expCard.className = "expcard";

        // left box
        var icon = document.createElement("img");
        icon.src = experience["icon"];

        var name = document.createElement("h2");
        name.textContent = experience["name"];

        // right box
        var title = document.createElement("h2");
        title.textContent = experience["title"];
        title.className = "orange";

        var date = document.createElement("p");
        date.textContent = experience["date"];

        var desc = document.createElement("p");
        desc.textContent = experience["description"];

        var descriptionBox = document.createElement("div");
        descriptionBox.className = "descBox";
        descriptionBox.appendChild(date);
        descriptionBox.appendChild(name);
        descriptionBox.appendChild(title);
        descriptionBox.appendChild(desc);

        expCard.appendChild(icon);
        expCard.appendChild(descriptionBox);

        expContainer.appendChild(expCard);
    }
}


