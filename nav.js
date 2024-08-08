document.getElementById('hamburger').onclick = function() {
    var navbar = document.getElementById('navbar');
    if (navbar.className === 'navbar') {
        navbar.className += ' active';
    } else {
        navbar.className = 'navbar';
    }
}

document.querySelector('.dropbtn').addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}