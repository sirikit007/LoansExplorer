document.addEventListener("DOMContentLoaded", onDocumentLoad); //страница полностью загружена
//sideMenu
let switchHome = document.getElementById('switchHome');
let switchCalculators = document.getElementById('switchCalculators');
let switchReviews = document.getElementById('switchReviews');
let switchPartners = document.getElementById('switchPartners');
let switchContactUs = document.getElementById('switchContactUs');
let switchLoanCalculator = document.getElementById('switchLoanCalculator');
let switchStampdutyCalculator = document.getElementById('switchStampdutyCalculator');
let switchBorrowingCalculator = document.getElementById('switchBorrowingCalculator');
//startPage
let switchStartPage = document.getElementById('switchStartPage');
let switchLoanCalcOnStartPage = document.getElementById('switchLoanCalcOnStartPage');
let switchDutyCalcOnStartPage = document.getElementById('switchDutyCalcOnStartPage');
let switchBorrowingCalcOnStartPage = document.getElementById('switchBorrowingCalcOnStartPage');
let switchConnectStartPage = document.getElementById('switchConnectStartPage');
let switchTestimonialsStartPage = document.getElementById('switchTestimonialsStartPage');

let mainContent = document.getElementById('mainContent');
let homePage = document.getElementById('homePage');
let contentLoanRepayments = document.getElementById('contentLoanRepayments');
let contentStampDuty= document.getElementById('contentStampDuty');
let contentBorrowingCalculator= document.getElementById('contentBorrowingCalculator');
let testimonials= document.getElementById('testimonials');
let contentPartners= document.getElementById('contentPartners');
let contentContacts = document.getElementById('contentContacts');

//add dark sidebar to side-menu list when on white page
let navbar = document.querySelector('#navContent');
window.addEventListener('scroll', darkSidebar);
switchHome.addEventListener('click', transparentSidebarOnClick);
switchCalculators.addEventListener('click', darkSidebarOnClick);
switchLoanCalculator.addEventListener('click', darkSidebarOnClick);
switchStampdutyCalculator.addEventListener('click', darkSidebarOnClick);
switchBorrowingCalculator.addEventListener('click', darkSidebarOnClick);
switchReviews.addEventListener('click', darkSidebarOnClick);
switchPartners.addEventListener('click', darkSidebarOnClick);
switchContactUs.addEventListener('click', darkSidebarOnClick);


function darkSidebarOnClick() {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-dark');
}
function transparentSidebarOnClick() {
    navbar.classList.remove('bg-dark');
    navbar.classList.add('bg-transparent');
}

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
});

let list = document.querySelectorAll('.menuNavigation a');
function activeLink() {
    list.forEach(item => {
        item.classList.remove('hovered');     
        
    })
    this.classList.add('hovered'); 
}
list.forEach(item => item.addEventListener('mouseover', activeLink));


//Switch Menu items

 function onDocumentLoad() {
    switchHome.addEventListener('click', switchContent);
    switchCalculators.addEventListener('click', switchContent);
    switchReviews.addEventListener('click', switchContent);
    switchPartners.addEventListener('click', switchContent);
    switchContactUs.addEventListener('click', switchContent);
    switchLoanCalculator.addEventListener('click', switchContent);
    switchStampdutyCalculator.addEventListener('click', switchContent);
    switchBorrowingCalculator.addEventListener('click', switchContent);
    switchStartPage.addEventListener('click', switchContent);
    switchLoanCalcOnStartPage.addEventListener('click', switchContent);
    switchDutyCalcOnStartPage.addEventListener('click', switchContent);
    switchBorrowingCalcOnStartPage.addEventListener('click', switchContent);
    switchConnectStartPage.addEventListener('click', switchContent);
    switchTestimonialsStartPage.addEventListener('click', switchContent);
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
        contentContacts.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
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
        contentContacts.setAttribute('hide', '');           
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
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
        contentContacts.setAttribute('hide', '');      
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
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

        contentContacts.removeAttribute('hide');
        contentLoanRepayments.setAttribute('hide', '');
        homePage.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');  
    }  else if (menuitem.id == 'switchLoanCalculator') {
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
        contentBorrowingCalculator.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
        contentContacts.setAttribute('hide', '');  
    } else if (menuitem.id == 'switchStampdutyCalculator') {
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
        contentBorrowingCalculator.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
        contentContacts.setAttribute('hide', '');  
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
        
        contentBorrowingCalculator.removeAttribute('hide');              
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
        contentContacts.setAttribute('hide', ''); 

    } else if (menuitem.id == 'switchStartPage') {
        switchHome.classList.remove('hovered');
        switchCalculators.classList.remove('hovered');
        switchReviews.classList.remove('hovered');
        switchPartners.classList.remove('hovered');
        switchContactUs.classList.remove('hovered');  
        switchLoanCalculator.classList.remove('hovered');       
        switchStampdutyCalculator.classList.remove('hovered'); 
        switchBorrowingCalculator.classList.remove('hovered');

        mainContent.removeAttribute('hide');
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');        
        contentContacts.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');

    } else if (menuitem.id == 'switchLoanCalcOnStartPage') {
              
        navbar.classList.add('bg-dark');  

        contentLoanRepayments.removeAttribute('hide'); 
        homePage.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');        
        contentContacts.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');       
        mainContent.setAttribute('hide', '');       
    } else if (menuitem.id == 'switchDutyCalcOnStartPage') {
        navbar.classList.add('bg-dark');  

        contentStampDuty.removeAttribute('hide'); 
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');        
        contentContacts.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');       
        mainContent.setAttribute('hide', '');       
    } else if (menuitem.id == 'switchBorrowingCalcOnStartPage') {
        navbar.classList.add('bg-dark');  

        contentBorrowingCalculator.removeAttribute('hide'); 
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');        
        contentContacts.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');       
        mainContent.setAttribute('hide', '');       
    }  else if (menuitem.id == 'switchConnectStartPage') {
        navbar.classList.add('bg-dark');  

        menuitem.classList.add('hovered');


        contentContacts.removeAttribute('hide');
        contentLoanRepayments.setAttribute('hide', '');
        homePage.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');  
    } else if (menuitem.id == 'switchTestimonialsStartPage') {
        navbar.classList.add('bg-dark');  

        testimonials.removeAttribute('hide');
        contentLoanRepayments.setAttribute('hide', '');
        homePage.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
        contentContacts.setAttribute('hide', '');
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



