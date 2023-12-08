//add hover effect yo side-menu list
let list = document.querySelectorAll('.menuNavigation li');
function activeLink() {
    list.forEach(item=> {
        item.classList.remove('hovered');
    })
    this.classList.add('hovered');
}
list.forEach(item => item.addEventListener('mouseover', activeLink));