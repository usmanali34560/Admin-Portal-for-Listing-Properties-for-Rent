// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const addPropertyForm = document.getElementById("addPropertyForm");

    // Add event listener for form submission
    addPropertyForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const propertyName = document.getElementById("propertyName").value.trim();
        const location = document.getElementById("location").value;
        const propertyType = document.querySelector('input[name="type"]:checked');
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value.trim();
        const images = document.getElementById("images").files;

        // Validate inputs
        if (!propertyName || !location || !propertyType || !price || !description) {
            alert("Please fill out all required fields.");
            return;
        }

        // Create a property object (for simulation only)
        const property = {
            name: propertyName,
            location: location,
            type: propertyType.value,
            price: price,
            description: description,
            images: Array.from(images).map((file) => file.name), // Store image names
        };

        // Simulate saving the property
        console.log("Property submitted:", property);

        // Show a success message
        alert("Property added successfully!");

        // Clear the form after submission
        addPropertyForm.reset();
    });
});
