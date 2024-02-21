document.addEventListener("DOMContentLoaded", onDocumentLoad); //страница полностью загружена

//add dark sidebar to side-menu list when on white page
let navbar = document.querySelector('#navContent');
window.addEventListener('scroll', darkSidebar);

function darkSidebar() {
    
    if (window.pageYOffset > 600) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
};

//rotate angle on side-bar menu
let angleForSidebar = document.querySelector('.angleForSidebar');
let rotateAngle = document.getElementById('rotateAngle');
rotateAngle.addEventListener('click', function() {
    angleForSidebar.classList.toggle('rotate');
}
)


let list = document.querySelectorAll('.menuNavigation a');
function activeLink() {
    list.forEach(item=> {
        item.classList.remove('hovered');
    })
    this.classList.add('hovered');
}
list.forEach(item => item.addEventListener('mouseover', activeLink));

//Switch Menu items
let switchHome = document.getElementById('switchHome');
let switchCalculators = document.getElementById('switchCalculators');
let switchReviews = document.getElementById('switchReviews');
let switchPartners = document.getElementById('switchPartners');
let switchContactUs = document.getElementById('switchContactUs');
let switchLoanCalculator = document.getElementById('switchLoanCalculator');
let switchStampdutyCalculator = document.getElementById('switchStampdutyCalculator');
let switchBorrowingCalculator = document.getElementById('switchBorrowingCalculator');

let mainContent = document.getElementById('mainContent');
let homePage = document.getElementById('homePage');
let contentLoanRepayments = document.getElementById('contentLoanRepayments');
let contentStampDuty= document.getElementById('contentStampDuty');
let borrowingCalculator= document.getElementById('borrowingCalculator');
let testimonials= document.getElementById('testimonials');
let contentPartners= document.getElementById('contentPartners');


 function onDocumentLoad() {
    switchHome.addEventListener('click', switchContent);
    switchCalculators.addEventListener('click', switchContent);
    switchReviews.addEventListener('click', switchContent);
    switchPartners.addEventListener('click', switchContent);
    switchContactUs.addEventListener('click', switchContent);
    switchLoanCalculator.addEventListener('click', switchContent);
    switchStampdutyCalculator.addEventListener('click', switchContent);
    switchBorrowingCalculator.addEventListener('click', switchContent);
    
 }




//sidebar

function switchContent(event) {
    console.log(event.target);
    let menuitem = event.target.closest('[menuitem]');
    window.removeEventListener('scroll', darkSidebar);
    if (menuitem.id == 'switchHome') {        
        menuitem.classList.add('hovered');
        switchCalculators.classList.remove('hovered');
        switchReviews.classList.remove('hovered');
        switchPartners.classList.remove('hovered');
        switchContactUs.classList.remove('hovered');
        switchLoanCalculator.classList.remove('hovered');
        switchStampdutyCalculator.classList.remove('hovered');
        switchBorrowingCalculator.classList.remove('hovered');

        navbar.classList.add('bg-dark');
        
        
        
        homePage.removeAttribute('hide');
        contentLoanRepayments.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        borrowingCalculator.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
        
    } else if (menuitem.id == 'switchCalculators') {
        menuitem.classList.add('hovered');
        switchHome.classList.remove('hovered');
        switchReviews.classList.remove('hovered');
        switchPartners.classList.remove('hovered');
        switchContactUs.classList.remove('hovered');
        switchLoanCalculator.classList.remove('hovered');
        switchStampdutyCalculator.classList.remove('hovered');
        switchBorrowingCalculator.classList.remove('hovered');

      
       
    } else if (menuitem.id == 'switchReviews') {
        menuitem.classList.add('hovered');
        switchHome.classList.remove('hovered');
        switchCalculators.classList.remove('hovered');
        switchPartners.classList.remove('hovered');
        switchContactUs.classList.remove('hovered');
        switchLoanCalculator.classList.remove('hovered');
        switchStampdutyCalculator.classList.remove('hovered');
        switchBorrowingCalculator.classList.remove('hovered');

        testimonials.removeAttribute('hide');            
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        borrowingCalculator.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
    } else if (menuitem.id == 'switchPartners') {
        menuitem.classList.add('hovered');
        switchHome.classList.remove('hovered');
        switchCalculators.classList.remove('hovered');
        switchReviews.classList.remove('hovered');
        switchContactUs.classList.remove('hovered');
        switchLoanCalculator.classList.remove('hovered');
        switchStampdutyCalculator.classList.remove('hovered');
        switchBorrowingCalculator.classList.remove('hovered');

        contentPartners.removeAttribute('hide');      
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        borrowingCalculator.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
    } else if (menuitem.id == 'switchContactUs') {
        menuitem.classList.add('hovered');
        switchHome.classList.remove('hovered');
        switchCalculators.classList.remove('hovered');
        switchReviews.classList.remove('hovered');
        switchPartners.classList.remove('hovered');
        switchLoanCalculator.classList.remove('hovered');
        switchStampdutyCalculator.classList.remove('hovered');
        switchBorrowingCalculator.classList.remove('hovered');

      
    }
    else if (menuitem.id == 'switchLoanCalculator') {
        menuitem.classList.add('hovered');
        switchHome.classList.remove('hovered');
        switchCalculators.classList.remove('hovered');
        switchReviews.classList.remove('hovered');
        switchPartners.classList.remove('hovered');
        switchContactUs.classList.remove('hovered');
        switchStampdutyCalculator.classList.remove('hovered');
        switchBorrowingCalculator.classList.remove('hovered');

        contentLoanRepayments.removeAttribute('hide');
        homePage.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        borrowingCalculator.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
    }
    else if (menuitem.id == 'switchStampdutyCalculator') {
        menuitem.classList.add('hovered');
        switchHome.classList.remove('hovered');
        switchCalculators.classList.remove('hovered');
        switchReviews.classList.remove('hovered');
        switchPartners.classList.remove('hovered');
        switchContactUs.classList.remove('hovered');  
        switchLoanCalculator.classList.remove('hovered');
        switchBorrowingCalculator.classList.remove('hovered'); 
        
        contentStampDuty.removeAttribute('hide');        
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        borrowingCalculator.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
    }
    else if (menuitem.id == 'switchBorrowingCalculator') {
        menuitem.classList.add('hovered');
        switchHome.classList.remove('hovered');
        switchCalculators.classList.remove('hovered');
        switchReviews.classList.remove('hovered');
        switchPartners.classList.remove('hovered');
        switchContactUs.classList.remove('hovered');  
        switchLoanCalculator.classList.remove('hovered');       
        switchStampdutyCalculator.classList.remove('hovered'); 
        
        borrowingCalculator.removeAttribute('hide');              
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
    }
    
}


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




//--------------------------------------------------------------------Stamp Duty Calculator-------*/
//dropDown States Menu for Stamp Duty
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

//Expand Table Button for Stamp Duty
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

// Facebook's moving button
function calculateWindowWidth() {     
    const windowWidth = document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--window-width", windowWidth + "px");
    console.log(windowWidth);   
}

//----------------Message send----------------------
/*
let popup = document.getElementById('popup');
let openNewTab = document.getElementById('openNewTab').addEventListener('click', function() {
    popup.classList.add('openPopup');
})
*/


