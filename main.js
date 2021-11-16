let humburger = document.querySelector('.humburger');
let rotate = document.querySelectorAll('.humburger div');
let navLinks = document.querySelectorAll('.nav-links li');
let links = document.querySelector('.nav-links');


humburger.addEventListener('click', () => {
  links.classList.toggle('open');
  rotate.forEach(rotation => {
      rotation.classList.toggle('rotate');
  });
  navLinks.forEach(navigation => {
      navigation.classList.toggle('fade');
  })
});