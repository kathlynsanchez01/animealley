// Function to open the modal and set the product title and image based on the clicked image
function openModal(clickedImage) {
    // Get the title from the alt attribute of the clicked image
    const imageTitle = clickedImage.alt;

    // Set the modal title to match the clicked image's alt text
    document.getElementById('modalImageTitle').innerText = "You selected: " + imageTitle;

    // Set the modal image to the source of the clicked image
    document.getElementById('modalImage').src = clickedImage.src;

    // Display the modal
    document.getElementById('orderModal').style.display = "block";
}

// Function to close the modal
function closeModal() {
    // Hide the modal
    document.getElementById('orderModal').style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('orderModal')) {
        closeModal();
    }
}

// Function to show confirmation message
    function showConfirmation() {
        alert("Your order is received. Please wait for our customer service to call you about the payment instructions and further details of your purchase. Lead time of 3 weeks or less in delivering your order is guaranteed upon payment.");
    }
