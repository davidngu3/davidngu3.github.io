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

    projects["js-calculator"] = {
        name: "js-calculator",
        image: "images/js-calculator.jpg",
        description: "A pure html/js/css calculator to practice web dev fundamentals",
        link: "https://github.com/davidngu3/js-calculator"
    };
    
    projects["popa"] = {
        name: "Popa",
        image: "images/popa.jpg",
        description: "Winner for Google DSC Retro Game Hackathon. \
        Popa is a game where the player must shoot incoming baddies which come faster and faster! \
        Inspired by old school retro games complete with sound effects and pixel art",
        link: "https://github.com/davidngu3/Popa"
    };

    projects["etch"] = {
        name: "Etch-A-Sketch",
        image: "images/etch.jpg",
        description: "An etch-a-sketch emulation to practice web-dev fundamentals including pseudo-elements and CSS flexbox",
        link: "https://github.com/davidngu3/etch-a-sketch"
    };

    projects["quote-generator"] = {
        name: "Random Quote Generator",
        image: "images/quote.jpg",
        description: "A website which displays and animates some of my favourite quotes. \
        A project based on FreeCodeCamp's 'Responsive Web Design' certification. \
        Incorporates beginner to intermediate level HTML, CSS and JS.",
        link: "https://github.com/davidngu3/random-quote-generator"
    };

    projects["website"] = {
        name: "Personal Website",
        image: "images/website.jpg",
        description: "You're looking at it",
        link: "https://github.com/davidngu3/davidngu3.github.io"
    };

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

        var title = document.createElement("div");
        title.textContent = project["name"];
        title.className = "cardTitle";

        var image = document.createElement("img");
        image.src = project["image"];
        image.className = "cardImg";

        var description = document.createElement("div");
        description.textContent = project["description"];
        description.className = "cardDescription";
        
        var gitLink = document.createElement("a");
        var gitImg = document.createElement("img");
        gitImg.src = "images/git.png";
        gitLink.href = project["link"];
        gitLink.className = "cardGitLink";
        gitImg.className = "cardGitImage";
        gitLink.appendChild(gitImg);

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(description);
        card.appendChild(gitLink);

        projectsDiv.appendChild(card);
    }

}


