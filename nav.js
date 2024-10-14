const toggleButton = document.getElementsByClassName("toggle-button")[0];
const mobileNav = document.getElementsByClassName("mobile-nav")[0];
const bars = document.getElementsByClassName("bar");
const body = document.body;
const mobileLinks = document.getElementsByClassName("mobile-link");

toggleButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');

    for (let i = 0; i < bars.length; i++) { //Turn hamburger into X
        bars[i].classList.toggle('active');
    }

    if (mobileNav.classList.contains('active')) {
       
        for (let i = 0; i < bars.length; i++) {
            bars[i].style.backgroundColor = "#1a1a1a"; // Hover color
        }

        body.style.overflow = 'hidden'; //When mobile nav active disable scroll
    } 
    else {

        for (let i = 0; i < bars.length; i++) {
            bars[i].style.backgroundColor = "white"; // Hover color
        }

        body.style.overflow = 'auto';
    }
});

for (let i = 0; i < mobileLinks.length; i++){ //If click on a link enable scroll and hide nav
    mobileLinks[i].addEventListener('click', () => {

        for (let i = 0; i < bars.length; i++) { //To turn X back into hamburger
            bars[i].classList.toggle('active');
        }

        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.toggle('active');
        }
        body.style.overflow = 'auto';

        for (let i = 0; i < bars.length; i++) {
            bars[i].style.backgroundColor = "white"; //Initial color white
        }
    });
}

