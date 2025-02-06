// Initialize variables
let balloon = document.getElementById('balloon');
let colors = ['red', 'green', 'blue'];
let colorIndex = 0;
let currentSize = 200;

// Click handler
balloon.addEventListener('click', () => {
    currentSize += 10;
    
    // Explode if too big
    if(currentSize > 420) {
        currentSize = 200;
        colorIndex = 0;
    } 
    else {
        colorIndex = (colorIndex + 1) % colors.length; // Cycle colors forward
    }
    
    // Update balloon
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    balloon.style.background = colors[colorIndex];
});
