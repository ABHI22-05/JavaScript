const button = document.getElementById('btn');
const body = document.body;
const showColor = document.getElementById('showColor')
const color = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', () => {
    let hexColor = '#';  // Start with the '#' for hex color
    
    // Generate a random hex color by concatenating 6 random values
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * color.length);  // Generate a new random index each time
        hexColor += color[random];  // Append the selected random character to hexColor
    }
    
    // Set the background color of the body to the generated hex color
    body.style.backgroundColor = hexColor;
    showColor.innerText = hexColor;
});

