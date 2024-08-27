// This script can be used to add interactivity to the website, like smooth scrolling or expanding project descriptions.
document.querySelectorAll('.project-image').forEach(img => {
  img.addEventListener('click', function () {
      const description = this.nextElementSibling;
      description.style.display = description.style.display === 'block' ? 'none' : 'block';
  });
});
