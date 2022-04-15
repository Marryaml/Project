let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('nav-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})