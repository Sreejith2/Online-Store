const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const rob_button = document.getElementById('primary');



//Dark Mode
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src= 'static/img/undraw_blooming_dark.svg';
    image2.src='static/img/undraw_children_dark.svg';
    image3.src='static/img/undraw_eating_together_dark.svg';
}


//Light Mode

//Dark Mode
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src='static/img/undraw_blooming_light.svg';
    image2.src='static/img/undraw_children_light.svg';
    image3.src='undraw_eating_together_dark.svg';
}





function switchTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
    }
}

//Event Listener
toggleSwitch.addEventListener('change',switchTheme)