
    let nameInput = document.getElementById('nameInput');
    let displayName = document.getElementById('displayName');

    nameInput.addEventListener('input', function() {
        // Filter the input value to allow only letters and spaces
        nameInput.value   = nameInput.value.replace(/[^a-zA-Z ]/g, '');
       
        
        // Update the heading with the filtered value
        displayName.innerText = nameInput.value;
    });

