
let button = document.createElement('button');


button.innerText = 'Click Me'; // Set the button text
button.id = 'myButton'; // Set an ID for the button (optional)
button.className = 'btn'; // Set a class for the button (optional)

// Step 3: Append the button to an existing element in the DOM
let container = document.getElementById('buttonContainer');
container.appendChild(button);

// Optionally, you can add an event listener to the button
button.addEventListener('click', function() {
   button.style.backgroundColor=`green`;
});
