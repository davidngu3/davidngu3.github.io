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

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    window.addEventListener("scroll", function() {
        var header = document.getElementById("header");
        header.classList.toggle("sticky", window.scrollY > navbarOffset);
    })
        
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
}


