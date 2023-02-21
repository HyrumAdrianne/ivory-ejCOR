// Add a click event listener to each person link
const personLinks = document.querySelectorAll('.person-link');
personLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();
    // Get the href value of the clicked link
    const href = link.getAttribute('href');
    // Scroll to the corresponding record
    const record = document.querySelector(href);
    record.scrollIntoView({ behavior: 'smooth' });
  });
});
