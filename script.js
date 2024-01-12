//add hover effect yo side-menu list
let navbar = document.querySelector('#navContent');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 600) {
        navbar.classList.add('bg-dark', 'shadow');
    } else {
        navbar.classList.remove('bg-dark', 'shadow');
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




//Scroll Animation

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

