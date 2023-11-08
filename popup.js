document.addEventListener('DOMContentLoaded', function() {
  // Find all links with the "open-link" class
  var links = document.querySelectorAll('.open-link');

  // Add a click event listener to each link
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      chrome.tabs.create({ url: link.getAttribute('href') }); // Open the link in a new tab
    });
  });
});
