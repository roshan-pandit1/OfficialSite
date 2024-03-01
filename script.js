window.onload = function() {
    var title = document.getElementById("title");
    var text = "Entrepreneurship";
    var i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.innerHTML = text.substring(0, i+1) + "-Cell";
            i++;
            setTimeout(typeWriter, 150); // writing speed
        } else {
            // Reset after completion
            setTimeout(() => {
                title.innerHTML = "E-Cell";
                i = 0;
                setTimeout(typeWriter, 1000); // Adjust delay before repeating 
            }, 2000); // Adjust delay before collapsing 
        }
    }

    title.innerHTML = "E-Cell";
    typeWriter();
};