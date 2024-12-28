// Book Constructor
function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
}

// Display Constructor
function Display() {}

// Add method to Display prototype for logging
Display.prototype.add = function(book) {
    console.log("Adding book to UI:", book);
};

// Clear method to reset form fields
Display.prototype.clear = function() {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};

// Event listener for form submission
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    console.log("Form successfully submitted");

    // Get values from input fields
    let name = document.getElementById('bookName').value.trim();
    let author = document.getElementById('author').value.trim();
    let year = document.getElementById('year').value.trim();

    // Validate input
    if (!name || !author || isNaN(year) || year.trim() === "") {
        alert('Please enter valid book details.');
        return;
    }

    // Create a new book object
    let book = new Book(name, author, year);

    // Create a new list item for the book
    let bookElement = document.createElement('div');
    bookElement.className = 'list-group-item d-flex justify-content-between align-items-center';
    bookElement.innerHTML = `<strong>${book.name}</strong> by ${book.author}, Year: ${book.year}`;

    // Add a remove button
    let deleteButton = document.createElement("button");
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.innerHTML = "Remove";
    deleteButton.onclick = function() {
        document.getElementById('bookList').removeChild(bookElement);
    };

    // Append the delete button to the book element
    bookElement.appendChild(deleteButton);

    // Add the book element to the book list
    document.getElementById('bookList').appendChild(bookElement);

    // Clear the form fields using the Display object
    let display = new Display();
    display.add(book); // Log the added book
    display.clear(); // Reset the form
}
