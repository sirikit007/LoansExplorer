

//add hover effect to side-menu list
let navbar = document.querySelector('#navContent');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 600) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
});

//rotate angle
let rotateAngle = document.querySelector('.rotateAngle');
let collapseSidebar = document.getElementById('collapseSidebar');
collapseSidebar.addEventListener('click', function() {
    rotateAngle.classList.toggle('rotate');
}
)




let list = document.querySelectorAll('.menuNavigation li');
function activeLink() {
    list.forEach(item=> {
        item.classList.remove('hovered');
    })
    this.classList.add('hovered');
}
list.forEach(item => item.addEventListener('mouseover', activeLink));


/*

//Scroll Animation - intersection observer

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.classList.remove('show');
        }
    })
})

let hiddenElem = document.querySelectorAll('.hidden');
hiddenElem.forEach((el) => observer.observe(el));

//Scroll Animation - scroll reveal

ScrollReveal({
    reset:true,
    distance: '60px',
    duration: 2500,
    delay: 400
});
ScrollReveal().reveal('.scrollLeft',  {delay: 500, origin: 'left'});
ScrollReveal().reveal('.iconbox img',  {delay: 400, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.scrollUp',  {delay: 500, origin: 'up'});

*/


//--------------------------------------------------------------------Stamp Duty Calculator-------*/
//dropDown Menu for Stamp Duty
let selectedState = document.getElementById('selectedState');
let selectFieldStates = document.getElementById('selectFieldStates');
let listFieldState = document.getElementById('listFieldState');
let optionsStates = document.getElementsByClassName('optionsStates');
let faStates = document.querySelector('.faStates');


selectFieldStates.addEventListener('click', function() {
    listFieldState.classList.toggle('hide');
    faStates.classList.toggle('rotate');
    selectFieldStates.classList.toggle('borderRadiusBottom');
});

for (let option of optionsStates) {
    option.addEventListener('click', function() {
        selectedState.innerHTML= this.textContent;
        listFieldState.classList.toggle('hide');
        faStates.classList.toggle('rotate');
        selectFieldStates.classList.toggle('borderRadiusBottom');
    })
}
document.addEventListener('click', function(event) {
    let listStates = document.getElementById('listStates');
    let isClickInsideMenuProperty = listStates.contains(event.target);

    if (!isClickInsideMenuProperty) {
        listFieldState.classList.add('hide');
    }
});

//Expand Table Button
let expandButton = document.getElementById('expandButton');
let textTable = document.getElementById('textTable');

expandButton.addEventListener('click', function(e) {
    e.preventDefault(); 
    if (textTable.style.maxHeight) {
        textTable.style.maxHeight = null;
    } else {
        textTable.style.maxHeight = textTable.scrollHeight + 'px';
    }    
});