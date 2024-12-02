// Get the elements
const count = document.getElementsByClassName('count')[0]; // Assuming there's only one count element
const incBtn = document.getElementsByClassName('increase')[0]; // Get the first "increase" button
const decBtn = document.getElementsByClassName('decrease')[0]; // Get the first "decrease" button

// Initialize the count value
let currentCount = 0;
count.innerText = currentCount;

// Add event listeners to the buttons
incBtn.addEventListener('click', () => {
    currentCount++;
    count.innerText = currentCount; // Update the count on the page
});

decBtn.addEventListener('click', () => {
    if(currentCount > 0){
        currentCount--;
        count.innerText = currentCount; // Update the count on the page
    }
    else{
        alert('the counter is Zero')
    }
});
