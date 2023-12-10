document.addEventListener("DOMContentLoaded", function () {
    // Simulate a 2-second loading delay
    setTimeout(function () {
        // Hide the loader when the content is fully loaded
        document.querySelector('.loader-wrapper').style.display = 'none';
    }, 1000);
});
