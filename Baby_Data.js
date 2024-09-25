let babies = [];
let boysCount = 0;
let girlsCount = 0;

function displayBabies() {
    const table = document.getElementById('childList');
    table.innerHTML = ''; 

    const header = document.createElement('tr');
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Name';
    nameHeader.style.border = '1px solid black';

    const sexHeader = document.createElement('th');
    sexHeader.textContent = 'Sex';
    sexHeader.style.border = '1px solid black';

    header.appendChild(nameHeader);
    header.appendChild(sexHeader);
    table.appendChild(header);

    babies.forEach(([name, sex]) => {
        const row = document.createElement('tr');
        row.style.backgroundColor = sex === 'male' ? 'powderblue' : 'pink';

        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        nameCell.style.border = '1px solid black';

        const sexCell = document.createElement('td');
        sexCell.textContent = sex.charAt(0).toUpperCase() + sex.slice(1);
        sexCell.style.border = '1px solid black';

        row.appendChild(nameCell);
        row.appendChild(sexCell);
        table.appendChild(row);
    });
}

// Function to add a baby
function addBaby() {
    const nameInput = document.getElementById('childName').value.trim();
    const sexSelect = document.getElementById('gender');
    const sex = sexSelect.options[sexSelect.selectedIndex].value;

    // Check if the name already exists
    const nameExists = babies.some(([existingName]) => existingName === nameInput);

    if (nameInput && !nameExists) {
        babies.push([nameInput, sex]);
        displayBabies();
    } else {
        alert('Please enter a unique name for the baby.');
    }

    // Clear input fields
    document.getElementById('childName').value = '';
    sexSelect.selectedIndex = 0;
}

// Function to remove the last baby
function removeBaby() {
    if (babies.length > 0) {
        babies.pop();
        displayBabies();
    } else {
        alert('No babies to remove.');
    }
}

// Function to empty the list
function emptyList() {
    babies = [];
    displayBabies();
}

// Function to count babies by sex
function countBySex() {
    const boysCount = babies.filter(([, sex]) => sex === 'male').length;
    const girlsCount = babies.filter(([, sex]) => sex === 'female').length;

    document.getElementById('boysCount').textContent = boysCount;
    document.getElementById('girlsCount').textContent = girlsCount;
}

// Event listeners for buttons
document.getElementById('add').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    addBaby();
});

document.getElementById('remove').addEventListener('click', (e) => {
    e.preventDefault(); 
    removeBaby();
});

document.getElementById('empty').addEventListener('click', (e) => {
    e.preventDefault(); 
    emptyList();
});

document.getElementById('count').addEventListener('click', (e) => {
    e.preventDefault(); 
    countBySex();
});
