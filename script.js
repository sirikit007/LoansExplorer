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

let switchPrivacyPolicy = document.getElementById('switchPrivacyPolicy');
let switchDisputeResolutionPolicy = document.getElementById('switchDisputeResolutionPolicy');

let expandButtonMenu = document.getElementById('expandButtonMenu');
//startPage
let switchStartPage = document.getElementById('switchStartPage');
let switchLoanCalcOnStartPage = document.getElementById('switchLoanCalcOnStartPage');
let switchDutyCalcOnStartPage = document.getElementById('switchDutyCalcOnStartPage');
let switchBorrowingCalcOnStartPage = document.getElementById('switchBorrowingCalcOnStartPage');
let switchConnectStartPage = document.getElementById('switchConnectStartPage');
let switchTestimonialsStartPage = document.getElementById('switchTestimonialsStartPage');
let switchFooterHome = document.getElementById('switchFooterHome');
let switchFooterCalculators = document.getElementById('switchFooterCalculators');
let switchFooterReviews = document.getElementById('switchFooterReviews');
let switchFooterPartners = document.getElementById('switchFooterPartners');
let switchFooterContacts = document.getElementById('switchFooterContacts');
let switchStartPageFromMobile = document.getElementById('switchStartPageFromMobile');

let mainContent = document.getElementById('mainContent');
let homePage = document.getElementById('homePage');
let contentLoanRepayments = document.getElementById('contentLoanRepayments');
let contentStampDuty= document.getElementById('contentStampDuty');
let contentBorrowingCalculator= document.getElementById('contentBorrowingCalculator');
let testimonials= document.getElementById('testimonials');
let contentPartners= document.getElementById('contentPartners');
let contentContacts = document.getElementById('contentContacts');
let privacyPolicy = document.getElementById('privacyPolicy');
let disputeResolutionPolicy = document.getElementById('disputeResolutionPolicy');

//add dark sidebar to side-menu list when on white page
let navbar = document.querySelector('#navContent');
window.addEventListener('scroll', darkSidebar);
window.addEventListener('resize', checkWindowSize);


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



function checkWindowSize() {
    if (window.innerWidth < 1200) {
        window.removeEventListener('scroll', darkSidebar);
         
        switchLoanCalculator.removeEventListener('click', darkSidebarOnClick);
        switchStampdutyCalculator.removeEventListener('click', darkSidebarOnClick);
        switchBorrowingCalculator.removeEventListener('click', darkSidebarOnClick);
        switchReviews.removeEventListener('click', darkSidebarOnClick);
        switchPartners.removeEventListener('click', darkSidebarOnClick);
        switchContactUs.removeEventListener('click', darkSidebarOnClick);
        switchHome.removeEventListener('click', darkSidebarOnClick);
      
    } else {
        window.addEventListener('scroll', darkSidebar);
      
        switchLoanCalculator.addEventListener('click', darkSidebarOnClick);
        switchStampdutyCalculator.addEventListener('click', darkSidebarOnClick);
        switchBorrowingCalculator.addEventListener('click', darkSidebarOnClick);
        switchReviews.addEventListener('click', darkSidebarOnClick);
        switchPartners.addEventListener('click', darkSidebarOnClick);
        switchContactUs.addEventListener('click', darkSidebarOnClick);
        switchHome.addEventListener('click', darkSidebarOnClick);
    }
}
checkWindowSize();


//Close menu button
let menuNavigation = document.querySelector('.menuNavigation');
let closeMenu = document.getElementById('closeMenu');

closeMenu.addEventListener('click', function(e) {
    e.preventDefault();
    if (menuNavigation.classList.contains('show')) {
        menuNavigation.classList.remove('show');
    }
});


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
    switchFooterHome.addEventListener('click', switchContent);
    switchFooterCalculators.addEventListener('click', switchContent);
    switchFooterReviews.addEventListener('click', switchContent);
    switchFooterPartners.addEventListener('click', switchContent);
    switchFooterContacts.addEventListener('click', switchContent);   
    switchPrivacyPolicy.addEventListener('click', switchContent);
    switchDisputeResolutionPolicy.addEventListener('click', switchContent);
    switchStartPageFromMobile.addEventListener('click', switchContent);
 }




//sidebar


function switchContent(event) {
    console.log(event.target);
    let menuitem = event.target.closest('[menuitem]');
    window.removeEventListener('scroll', darkSidebar);
    window.addEventListener('resize', checkWindowSize);
   if (menuitem.id == 'switchHome') {        
        menuitem.classList.add('hovered');
        switchCalculators.classList.remove('hovered');
        switchReviews.classList.remove('hovered');
        switchPartners.classList.remove('hovered');
        switchContactUs.classList.remove('hovered');
        switchLoanCalculator.classList.remove('hovered');
        switchStampdutyCalculator.classList.remove('hovered');
        switchBorrowingCalculator.classList.remove('hovered');

        homePage.removeAttribute('hide');
        contentContacts.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', '');        
    } else if (menuitem.id == 'switchCalculators') {
        menuitem.classList.add('hovered');
        switchHome.classList.remove('hovered');
        switchReviews.classList.remove('hovered');
        switchPartners.classList.remove('hovered');
        switchContactUs.classList.remove('hovered');
        switchLoanCalculator.classList.remove('hovered');
        switchStampdutyCalculator.classList.remove('hovered');
        switchBorrowingCalculator.classList.remove('hovered');
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', '');        
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
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', ''); 
       
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
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', ''); 
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
        privacyPolicy.setAttribute('hide', ''); 
        disputeResolutionPolicy.setAttribute('hide', ''); 
    } else if (menuitem.id == 'switchLoanCalculator') {
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
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', '');  
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
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', '');  
    } else if (menuitem.id == 'switchBorrowingCalculator') {
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
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', ''); 
    } else if (menuitem.id == 'switchStartPage' || menuitem.id == 'switchStartPageFromMobile') {
        transparentSidebarOnClick();
        navbar.classList.remove('bg-transparent');
        window.addEventListener('scroll', darkSidebar);
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
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', ''); 
    } else if (menuitem.id == 'switchLoanCalcOnStartPage') {
              
        navbar.classList.add('bg-dark');  
        navbar.classList.remove('bg-transparent');
        contentLoanRepayments.removeAttribute('hide'); 
        homePage.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');        
        contentContacts.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');       
        mainContent.setAttribute('hide', '');  
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', '');      
    } else if (menuitem.id == 'switchDutyCalcOnStartPage') {
        navbar.classList.add('bg-dark');  
        navbar.classList.remove('bg-transparent');
        contentStampDuty.removeAttribute('hide'); 
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');        
        contentContacts.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');       
        mainContent.setAttribute('hide', '');
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', '');        
    } else if (menuitem.id == 'switchBorrowingCalcOnStartPage') {
        navbar.classList.add('bg-dark');  
        navbar.classList.remove('bg-transparent');
        contentBorrowingCalculator.removeAttribute('hide'); 
        homePage.setAttribute('hide', '');
        contentLoanRepayments.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');        
        contentContacts.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');       
        mainContent.setAttribute('hide', ''); 
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', '');       
    } else if (menuitem.id == 'switchConnectStartPage') {
        navbar.classList.add('bg-dark');  
        navbar.classList.remove('bg-transparent');
        menuitem.classList.add('hovered');


        contentContacts.removeAttribute('hide');
        contentLoanRepayments.setAttribute('hide', '');
        homePage.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', ''); 
        privacyPolicy.setAttribute('hide', ''); 
        disputeResolutionPolicy.setAttribute('hide', ''); 
    } else if (menuitem.id == 'switchTestimonialsStartPage') {
        navbar.classList.add('bg-dark');  
        navbar.classList.remove('bg-transparent');
        testimonials.removeAttribute('hide');
        contentLoanRepayments.setAttribute('hide', '');
        homePage.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
        contentContacts.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', '');   
    } else if (menuitem.id == 'switchFooterHome') {
        navbar.classList.add('bg-transparent');  
        navbar.classList.remove('bg-transparent');
        homePage.removeAttribute('hide');
        contentLoanRepayments.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
        contentContacts.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', '');   
    } else if (menuitem.id == 'switchFooterCalculators') { 
        navbar.classList.remove('bg-transparent');       
        mainContent.removeAttribute('hide');
        contentLoanRepayments.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
        contentContacts.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        homePage.setAttribute('hide', '');
        privacyPolicy.setAttribute('hide', ''); 
        disputeResolutionPolicy.setAttribute('hide', '');  
    } else if (menuitem.id == 'switchFooterReviews') {  
        navbar.classList.remove('bg-transparent');      
        testimonials.removeAttribute('hide');
        contentLoanRepayments.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
        contentContacts.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        homePage.setAttribute('hide', ''); 
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', '');  
    } else if (menuitem.id == 'switchFooterPartners') { 
        navbar.classList.remove('bg-transparent');       
        contentPartners.removeAttribute('hide');
        contentLoanRepayments.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
        contentContacts.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        homePage.setAttribute('hide', '');
        privacyPolicy.setAttribute('hide', ''); 
        disputeResolutionPolicy.setAttribute('hide', '');  
    } else if (menuitem.id == 'switchFooterContacts') {
        navbar.classList.remove('bg-transparent');        
        contentContacts.removeAttribute('hide');
        contentLoanRepayments.setAttribute('hide', '');
        mainContent.setAttribute('hide', '');
        contentStampDuty.setAttribute('hide', '');
        contentBorrowingCalculator.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        testimonials.setAttribute('hide', '');
        homePage.setAttribute('hide', '');
        privacyPolicy.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', '');   
    } else if (menuitem.id == 'switchPrivacyPolicy') {
        navbar.classList.remove('bg-transparent');
        privacyPolicy.removeAttribute('hide'); 
        homePage.setAttribute('hide', '');
        disputeResolutionPolicy.setAttribute('hide', ''); 
    } else if (menuitem.id == 'switchDisputeResolutionPolicy') {
        navbar.classList.remove('bg-transparent');
        disputeResolutionPolicy.removeAttribute('hide'); 
        homePage.setAttribute('hide', '');
        privacyPolicy.setAttribute('hide', ''); 
    } 
}


//Scroll Animation - intersection observer

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
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
//dropDown AusStates Menu for Stamp Duty
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
/*
expandButtonMenu.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(`menu-nav: ${menuNavigation.style.maxHeight}`);
    menuNavigation.style.maxHeight = null;
    if(menuNavigation.style.maxHeight) {
        menuNavigation.style.maxHeight = null;
    } else {
        menuNavigation.style.maxHeight = menuNavigation.scrollHeight + 'px';
    }
});


let pages = document.getElementById('pages');
switchCalculators.addEventListener('click', function(e) {
    e.preventDefault();
    menuNavigation.style.maxHeight = '714px';
    
    if(menuNavigation.style.maxHeight) {
        menuNavigation.style.maxHeight = pages.style.maxHeight + 'px';
    } else {
        menuNavigation.style.maxHeight;
    }
  
});
*/

// ------------------------------------------------------------------------Calculator

// Listen for click

let buttonCalculate = document.getElementById('buttonCalculate');

buttonCalculate.addEventListener('click', computeResult);


function computeResult(e) {
    let loanAmountString = document.getElementById('loanAmount').value;
    loanAmountString = loanAmountString.replace(/\s/g, '');  
    let loanAmount = Number(loanAmountString);
   
    let term = document.getElementById('term').value;
    let interestRate = document.getElementById('interestRate').value;

    //Calculate

    let principal = parseFloat(loanAmount);  
    console.log(`principal ${principal}`);
    let monthInterest = parseFloat(interestRate) / 100 / 12; 
    let monthsCount = parseFloat(term) * 12;
    console.log(`monthsCount ${monthsCount}`);



    //ours
    let yearInterestTrue = parseFloat(interestRate) / 100;
    console.log(`yearInterestTrue: ${yearInterestTrue}`);

    //let monthInterestTrue = Math.pow(1 + yearInterestTrue, 1/12) - 1;
    let monthInterestTrue = yearInterestTrue / 12;
    console.log(`monthInterestTrue: ${monthInterestTrue}`);
    let x = Math.pow(1.0 + monthInterestTrue, -monthsCount);
    console.log(`x: ${x}`);

    //compute monthly payment
    let monthPaymentTrue =  principal * monthInterestTrue / (1.0 - x);
    console.log(`monthPaymentTrue: ${monthPaymentTrue}`);

    //compute fortnightly repayment
    let fortnightlyCount = parseFloat(term) * 26;
    let fortnightlyInterestTrue = Math.pow(1 + yearInterestTrue, 1/26) - 1;
    let xx = Math.pow(1.0 + fortnightlyInterestTrue, -fortnightlyCount);
    let fortnightlyPaymentTrue = principal * fortnightlyInterestTrue / (1.0 - xx);
    console.log(`fortnightlyPaymentTrue: ${fortnightlyPaymentTrue}`);
    
    // weekly repayment
    let weeklyCount = parseFloat(term) * 52;
    let weeklyInterestTrue = Math.pow(1 + yearInterestTrue, 1/52) - 1;
    let xxx = Math.pow(1.0 + weeklyInterestTrue, -weeklyCount);
    let weeklyPaymentTrue = principal * weeklyInterestTrue / (1.0 - xxx);
    console.log(`weeklyPaymentTrue: ${weeklyPaymentTrue}`);

    //compute total repayment
    let totalPaymentTrue = monthsCount * monthPaymentTrue;
    console.log(`totalPaymentTrue: ${totalPaymentTrue}`);

    let totalInterestTrue = totalPaymentTrue / principal * 100;
    console.log(`totalInterestTrue: ${totalInterestTrue}`);


    //show results
   
    let weeklyPayments = document.getElementById('weeklyPayments');
    weeklyPayments.innerHTML = Math.floor(weeklyPaymentTrue);
    answerFormat(weeklyPayments);

    let fortnightlyPayments = document.getElementById('fortnightlyPayments');
    fortnightlyPayments.innerHTML = Math.floor(fortnightlyPaymentTrue);
    answerFormat(fortnightlyPayments);    
    
    let monthlyPayments = document.getElementById('monthlyPayments');
    monthlyPayments.innerHTML = Math.floor(monthPaymentTrue);
    answerFormat(monthlyPayments);    

    e.preventDefault();
}

function answerFormat(answ) {
    let formatted = new Intl.NumberFormat('fr-FR').format(answ.innerHTML);
    answ.innerHTML = formatted;
}

let inputGroup = document.querySelector('.inputGroup');
let inputGroupMonthlyPayments = document.querySelector('.inputGroupMonthlyPayments');

//--------------------------------------------------------------------Stump Duty Calculator

let inputGroupStamDuty = document.querySelector('.inputGroupStamDuty');

inputGroup.addEventListener('input', onInput);
inputGroupStamDuty.addEventListener('input', onInput);
inputGroupMonthlyPayments.addEventListener('change', onInput);

function onInput(e) {
    e.preventDefault();     
    let amountNumber = getInputNumber('#' + e.target.id);
    let formatted = new Intl.NumberFormat('fr-FR').format(amountNumber);    
    e.target.value = formatted;
} 

function getInputNumber(id) {
    let input = document.querySelector(id);
    if (!input) {
        return 0;
    }
    let result = Number(input.value.replace(/\s/g, ''));
    if (isNaN(result)) {
        return 0;
    } 
    return result;
}

let propertyValue = document.getElementById('propertyValue');
let existingProperty = document.getElementById('existingProperty');
let newProperty = document.getElementById('newProperty');
let vacantLand = document.getElementById('vacantLand');
let firstHomeBuyerYes = document.getElementById('firstHomeBuyerYes');
let resultStampDuty = document.getElementById('resultStampDuty'); 
let buttonCalculateStampDuty = document.getElementById('buttonCalculateStampDuty');
  
buttonCalculateStampDuty.addEventListener('click', stampDuty);

function stampDuty(e) {
    console.log('calculate started'); 
    e.preventDefault(); 
    let state = selectedState.textContent;  
    let stampDutyResult = 0;
    let stampDutyInput = getInputNumber('#propertyValue');

    console.log(firstHomeBuyerYes.checked);
    console.log(stampDutyInput);
    console.log(existingProperty.checked);
    console.log(newProperty.checked);
    console.log(newProperty.checked);

    if (state == 'New South Wales') {
        if (firstHomeBuyerYes.checked == true && stampDutyInput <= 800000 && (existingProperty.checked == true || newProperty.checked == true)) {
            stampDutyResult = 0;
        } else if (firstHomeBuyerYes.checked == true && stampDutyInput <= 350000 && vacantLand.checked == true) {
            stampDutyResult = 0;
        } else if (stampDutyInput >= 0 && stampDutyInput <= 16000) {
            stampDutyResult = Math.max(10, stampDutyInput / 100 * 1.25);            
        } else if (stampDutyInput > 16000 && stampDutyInput <= 35000) {
            stampDutyResult = 200 + ((stampDutyInput - 16000)/ 100 * 1.50);
        } else if (stampDutyInput > 35000 && stampDutyInput <= 93000) {
            stampDutyResult = 485 + ((stampDutyInput - 35000) / 100 * 1.75);
        }  else if (stampDutyInput > 93000 && stampDutyInput <= 351000) {
            stampDutyResult = 1500 + ((stampDutyInput - 93000) / 100 * 3.50);
        }  else if (stampDutyInput > 351000 && stampDutyInput <= 1168000) {
            stampDutyResult = 10530 + ((stampDutyInput - 351000) / 100 * 4.50);
        } else if (stampDutyInput > 1168000) {
            stampDutyResult = 47295 + ((stampDutyInput - 1168000) / 100 * 5.50);
        } else {
            stampDutyResult = 10;
        }    
    
    } else if (state == 'Victoria') {
        if (firstHomeBuyerYes.checked == true && stampDutyInput <= 600000 && (existingProperty.checked == true || newProperty.checked == true || vacantLand.checked == true)) {
            stampDutyResult = 0; 
        } else if (stampDutyInput >= 0 && stampDutyInput <= 25000) {
            stampDutyResult = stampDutyInput * 0.014;            
        } else if (stampDutyInput > 25000 && stampDutyInput <= 130000) {
            stampDutyResult = 350 + (stampDutyInput - 25000) * 0.024;
        } else if (stampDutyInput > 130000 && stampDutyInput <= 440000) {
            stampDutyResult = 2870 + (stampDutyInput - 130000) * 0.05;
        } else if (stampDutyInput > 440000 && stampDutyInput <= 550000) {
            stampDutyResult = 18370 + (stampDutyInput - 440000) * 0.06;
        } else if (stampDutyInput > 550000 && stampDutyInput <= 960000) {
            stampDutyResult = 2870 + (stampDutyInput - 130000) * 0.06;
        } else if (stampDutyInput > 960000 && stampDutyInput <= 2000000) {
            stampDutyResult = stampDutyInput * 0.055;
        } else if (stampDutyInput > 2000000) {
            stampDutyResult = 110000 + (stampDutyInput - 2000000) * 0.065;
        }
    } else if (state == 'Australian Capital Territory') {
        if (firstHomeBuyerYes.checked == true && stampDutyInput <= 1000000 && (existingProperty.checked == true || newProperty.checked == true || vacantLand.checked == true)) {
            stampDutyResult = 0; 
        }  else if (stampDutyInput > 1000000 && stampDutyInput <= 1455000) {
            stampDutyResult = (stampDutyInput - 1000000) * 0.064;
        } else if (stampDutyInput > 1455000) {
            stampDutyResult = (stampDutyInput * 0.0454) - 34504;
        } 
        if (firstHomeBuyerYes.checked == false && stampDutyInput > 0 && stampDutyInput <= 260000) {
            stampDutyResult = stampDutyInput * 0.0049;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 260000 && stampDutyInput <= 300000) {
            stampDutyResult = 1274 + (stampDutyInput - 260000) * 0.022;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 300000 && stampDutyInput <= 500000) {
            stampDutyResult = 2154 + (stampDutyInput - 300000) * 0.034;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 500000 && stampDutyInput <= 750000) {
            stampDutyResult = 8954 + (stampDutyInput - 500000) * 0.0432;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 750000 && stampDutyInput <= 1000000) {
            stampDutyResult = 19754 + (stampDutyInput - 750000) * 0.059;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 1000000 && stampDutyInput <= 1455000) {
            stampDutyResult = 34504 + (stampDutyInput - 1000000) * 0.064;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 1455000) {
            stampDutyResult = stampDutyInput * 0.0454;
        }
    }   else if (state == 'Northern Territory') {
        let V = stampDutyInput / 1000;
        if (stampDutyInput > 0 && stampDutyInput < 525000) {
            stampDutyResult = Math.floor((0.06571441 * (V * V)) + 15 * V);           
        } else if (stampDutyInput >= 525000 && stampDutyInput < 3000000) {
            stampDutyResult = stampDutyInput * 0.0495;
        } else if (stampDutyInput >= 3000000 && stampDutyInput < 5000000) {
            stampDutyResult = stampDutyInput * 0.0575;
        } else if (stampDutyInput > 5000000) {
            stampDutyResult = stampDutyInput * 0.0595;
        } 
    } else if (state == 'Queensland') {
        if (firstHomeBuyerYes.checked == true && stampDutyInput <= 500000 && (existingProperty.checked == true || newProperty.checked == true)) {
            stampDutyResult = 0; 
        }  else if (stampDutyInput > 500000 && stampDutyInput <= 505000) {
            stampDutyResult = ((stampDutyInput - 350000) * 0.035 + 3500) - 8750;
        } else if (stampDutyInput > 505000 && stampDutyInput < 510000) {
            stampDutyResult = ((stampDutyInput - 350000) * 0.035 + 3500) - 7875;
        } else if (stampDutyInput >= 510000 && stampDutyInput < 515000) {
            stampDutyResult = ((stampDutyInput - 350000) * 0.035 + 3500) - 7000;
        } else if (stampDutyInput >= 515000 && stampDutyInput < 520000) {
            stampDutyResult = ((stampDutyInput - 350000) * 0.035 + 3500) - 6125;
        } else if (stampDutyInput >= 520000 && stampDutyInput < 525000) {
            stampDutyResult = ((stampDutyInput - 350000) * 0.035 + 3500) - 5250;
        } else if (stampDutyInput >= 525000 && stampDutyInput < 530000) {
            stampDutyResult = ((stampDutyInput - 350000) * 0.035 + 3500) - 4375;
        } else if (stampDutyInput >= 530000 && stampDutyInput < 535000) {
            stampDutyResult = ((stampDutyInput - 350000) * 0.035 + 3500) - 3500;
        } else if (stampDutyInput >= 535000 && stampDutyInput < 540000) {
            stampDutyResult = ((stampDutyInput - 350000) * 0.035 + 3500) - 2625;
        } else if (stampDutyInput >= 540000 && stampDutyInput < 545000) {
            stampDutyResult = ((stampDutyInput - 540000) * 0.045 + 10150) - 1750;
        } else if (stampDutyInput >= 545000 && stampDutyInput < 550000) {
            stampDutyResult = ((stampDutyInput - 540000) * 0.045 + 10150) - 875;
        } else if (stampDutyInput >= 550000 && stampDutyInput <= 1000000) {
            stampDutyResult = (stampDutyInput - 540000) * 0.045 + 10150;
        } else if (stampDutyInput >= 1000000) {
            stampDutyResult = (stampDutyInput - 1000000) * 0.0575 + 30850;
        }
        if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput <= 250000) {
            stampDutyResult = 0;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 250000 && stampDutyInput < 260000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 7175;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 260000 && stampDutyInput < 270000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 6700;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 270000 && stampDutyInput < 280000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 6225;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 280000 && stampDutyInput < 290000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 5750;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 290000 && stampDutyInput < 300000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 5275;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 300000 && stampDutyInput < 310000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 4800;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 310000 && stampDutyInput < 320000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 4325;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 320000 && stampDutyInput < 330000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 3850;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 330000 && stampDutyInput < 340000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 3375;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 340000 && stampDutyInput < 350000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 2900;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 350000 && stampDutyInput < 360000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 2425;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 360000 && stampDutyInput < 370000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 1950;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 370000 && stampDutyInput < 380000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 1475;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 380000 && stampDutyInput < 390000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 1000;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 390000 && stampDutyInput < 400000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050 - 525;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 400000 && stampDutyInput < 540000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 540000 && stampDutyInput < 1000000) {
            stampDutyResult = (stampDutyInput - 540000) * 0.045 + 17325;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput >= 1000000) {
            stampDutyResult = (stampDutyInput - 1000000) * 0.0575 + 38025;
        }
        if (firstHomeBuyerYes.checked == false && vacantLand.checked == false && stampDutyInput > 0 && stampDutyInput < 350000) {
            stampDutyResult = stampDutyInput * 0.01;
        } else if (firstHomeBuyerYes.checked == false && vacantLand.checked == false && stampDutyInput >= 350000 && stampDutyInput < 540000) {
            stampDutyResult = (stampDutyInput - 350000) * 0.035 + 3500;
        } else if (firstHomeBuyerYes.checked == false && vacantLand.checked == false && stampDutyInput >= 540000 && stampDutyInput < 1000000) {
            stampDutyResult = (stampDutyInput - 540000) * 0.045 + 10150;
        } else if (firstHomeBuyerYes.checked == false && vacantLand.checked == false && stampDutyInput >= 1000000) {
            stampDutyResult = (stampDutyInput - 1000000) * 0.0575 + 30850;
        }
        if (firstHomeBuyerYes.checked == false && vacantLand.checked == true && stampDutyInput > 0 && stampDutyInput < 75000) {
            stampDutyResult = (stampDutyInput - 5000) * 0.015;
        } else if (firstHomeBuyerYes.checked == false && vacantLand.checked == true && stampDutyInput > 75000 && stampDutyInput < 540000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1050;
        } else if (firstHomeBuyerYes.checked == false && vacantLand.checked == true && stampDutyInput > 540000 && stampDutyInput < 1000000) {
            stampDutyResult = (stampDutyInput - 540000) * 0.045 + 17325;
        } else if (firstHomeBuyerYes.checked == false && vacantLand.checked == true && stampDutyInput >= 1000000) {
            stampDutyResult = (stampDutyInput - 1000000) * 0.0575 + 38025   ;
        }
        
    } else if (state == 'South Australia') {
        let S = (stampDutyInput - 500000) * 0.055 + 21330;
        let SLand = (stampDutyInput - 300000) * 0.05 + 11330;
        if (firstHomeBuyerYes.checked == true &&  newProperty.checked == true && stampDutyInput <= 650000) {
            stampDutyResult = 0; 
        } else if (firstHomeBuyerYes.checked == true &&  newProperty.checked == true && stampDutyInput > 650000 && stampDutyInput <= 700000) {
            stampDutyResult = S - (S * (1 - (stampDutyInput - 650000) / 50000));
        }
        else if (firstHomeBuyerYes.checked == true &&  newProperty.checked == true && stampDutyInput > 700000) {
            stampDutyResult = (stampDutyInput - 500000) * 0.055 + 21330;
        }
        if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput <= 400000) {
            stampDutyResult = 0;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput > 400000 && stampDutyInput <= 450000) {
            stampDutyResult = SLand - (SLand * (1 - (stampDutyInput - 400000) / 50000));
        }
        else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput > 450000 && stampDutyInput <= 500000) {
            stampDutyResult = (stampDutyInput - 300000) * 0.05 + 11330;
        }
        else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput > 500000) {
            stampDutyResult = (stampDutyInput - 500000) * 0.055 + 21330;
        }

        if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 0 && stampDutyInput <= 12000) {
            stampDutyResult = stampDutyInput * 0.01;
        } else if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 12000 && stampDutyInput <= 30000) {
            stampDutyResult = (stampDutyInput - 12000) * 0.02 + 120;
        } else if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 30000 && stampDutyInput <= 50000) {
            stampDutyResult = (stampDutyInput - 30000) * 0.03 + 480;
        } else if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 50000 && stampDutyInput <= 100000) {
            stampDutyResult = (stampDutyInput - 50000) * 0.035 + 1080;
        } else if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 100000 && stampDutyInput <= 200000) {
            stampDutyResult = (stampDutyInput - 100000) * 0.04 + 2830;
        } else if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 200000 && stampDutyInput <= 250000) {
            stampDutyResult = (stampDutyInput - 200000) * 0.0425 + 6830;
        } else if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 250000 && stampDutyInput <= 300000) {
            stampDutyResult = (stampDutyInput - 250000) * 0.0475 + 8955;
        } else if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 300000 && stampDutyInput <= 500000) {
            stampDutyResult = (stampDutyInput - 300000) * 0.05 + 11330;
        } else if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 500000) {
            stampDutyResult = (stampDutyInput - 500000) * 0.055 + 21330;
        }

        if (firstHomeBuyerYes.checked == false && stampDutyInput > 0 && stampDutyInput <= 12000) {
            stampDutyResult = stampDutyInput * 0.01;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 12000 && stampDutyInput <= 30000) {
            stampDutyResult = (stampDutyInput - 12000) * 0.02 + 120;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 30000 && stampDutyInput <= 50000) {
            stampDutyResult = (stampDutyInput - 30000) * 0.03 + 480;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 50000 && stampDutyInput <= 100000) {
            stampDutyResult = (stampDutyInput - 50000) * 0.035 + 1080;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 100000 && stampDutyInput <= 200000) {
            stampDutyResult = (stampDutyInput - 100000) * 0.04 + 2830;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 200000 && stampDutyInput <= 250000) {
            stampDutyResult = (stampDutyInput - 200000) * 0.0425 + 6830;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 250000 && stampDutyInput <= 300000) {
            stampDutyResult = (stampDutyInput - 250000) * 0.0475 + 8955;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 300000 && stampDutyInput <= 500000) {
            stampDutyResult = (stampDutyInput - 300000) * 0.05 + 11330;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 500000) {
            stampDutyResult = (stampDutyInput - 500000) * 0.055 + 21330;
        }
    } else if (state == 'Tasmania') {
        if ((firstHomeBuyerYes.checked == false || firstHomeBuyerYes.checked == true) && (newProperty.checked == true || vacantLand.checked == true) && stampDutyInput > 0 &&  stampDutyInput <= 3000) {
            stampDutyResult = 50; 
        } else if ((firstHomeBuyerYes.checked == false || firstHomeBuyerYes.checked == true) && (newProperty.checked == true || vacantLand.checked == true) && stampDutyInput > 3000 &&  stampDutyInput <= 25000) {
            stampDutyResult = (stampDutyInput - 3000) * 0.0175 + 50;
        } else if ((firstHomeBuyerYes.checked == false || firstHomeBuyerYes.checked == true) && (newProperty.checked == true || vacantLand.checked == true) && stampDutyInput > 25000 &&  stampDutyInput <= 75000) {
            stampDutyResult = (stampDutyInput - 25000) * 0.0225 + 435;
        } else if ((firstHomeBuyerYes.checked == false || firstHomeBuyerYes.checked == true) && (newProperty.checked == true || vacantLand.checked == true) && stampDutyInput > 75000 &&  stampDutyInput <= 200000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1560;
        } else if ((firstHomeBuyerYes.checked == false || firstHomeBuyerYes.checked == true) && (newProperty.checked == true || vacantLand.checked == true) && stampDutyInput > 200000 &&  stampDutyInput <= 375000) {
            stampDutyResult = (stampDutyInput - 200000) * 0.04 + 5935;
        } else if ((firstHomeBuyerYes.checked == false || firstHomeBuyerYes.checked == true) && (newProperty.checked == true || vacantLand.checked == true) && stampDutyInput > 375000 &&  stampDutyInput <= 725000) {
            stampDutyResult = (stampDutyInput - 375000) * 0.0425 + 12935;
        } else if ((firstHomeBuyerYes.checked == false || firstHomeBuyerYes.checked == true) && (newProperty.checked == true || vacantLand.checked == true) && stampDutyInput > 725000) {
            stampDutyResult = (stampDutyInput - 725000) * 0.045 + 27810;
        }
        if (firstHomeBuyerYes.checked == false && existingProperty.checked == true && stampDutyInput > 0 && stampDutyInput <= 3000) {
            stampDutyResult = 50; 
        } else if (firstHomeBuyerYes.checked == false && existingProperty.checked == true && stampDutyInput > 3000 &&  stampDutyInput <= 25000) {
            stampDutyResult = (stampDutyInput - 3000) * 0.0175 + 50;
        } else if (firstHomeBuyerYes.checked == false && existingProperty.checked == true && stampDutyInput > 25000 &&  stampDutyInput <= 75000) {
            stampDutyResult = (stampDutyInput - 25000) * 0.0225 + 435;
        } else if (firstHomeBuyerYes.checked == false && existingProperty.checked == true && stampDutyInput > 75000 &&  stampDutyInput <= 200000) {
            stampDutyResult = (stampDutyInput - 75000) * 0.035 + 1560;
        } else if (firstHomeBuyerYes.checked == false && existingProperty.checked == true && stampDutyInput > 200000 &&  stampDutyInput <= 375000) {
            stampDutyResult = (stampDutyInput - 200000) * 0.04 + 5935;
        } else if (firstHomeBuyerYes.checked == false && existingProperty.checked == true && stampDutyInput > 375000 &&  stampDutyInput <= 725000) {
            stampDutyResult = (stampDutyInput - 375000) * 0.0425 + 12935;
        } else if (firstHomeBuyerYes.checked == false && existingProperty.checked == true && stampDutyInput > 725000) {
            stampDutyResult = (stampDutyInput - 725000) * 0.045 + 27810;
        }
        
        if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput <= 3000) {
            stampDutyResult = 50 * 0.5;
        } else if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 3000 && stampDutyInput <= 25000) {
            stampDutyResult = ((stampDutyInput - 3000) * 0.0175 + 50) * 0.5;
        } else if (firstHomeBuyerYes.checked == true &&  existingProperty.checked == true && stampDutyInput > 25000 && stampDutyInput <= 75000) {
            stampDutyResult = ((stampDutyInput - 25000) * 0.0225 + 435) * 0.5;
        } else if (firstHomeBuyerYes.checked == true &&  existingProperty.checked == true && stampDutyInput > 75000 && stampDutyInput <= 200000) {
            stampDutyResult = ((stampDutyInput - 75000) * 0.035 + 1560) * 0.5;
        } else if (firstHomeBuyerYes.checked == true &&  existingProperty.checked == true && stampDutyInput > 200000 && stampDutyInput <= 375000) {
            stampDutyResult = ((stampDutyInput - 200000) * 0.04 + 5935) * 0.5;
        } else if (firstHomeBuyerYes.checked == true &&  existingProperty.checked == true && stampDutyInput > 375000 && stampDutyInput <= 600000) {
            stampDutyResult = ((stampDutyInput - 375000) * 0.0425 + 12935) * 0.5;
        } else if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 600000 && stampDutyInput <= 725000) {
            stampDutyResult = (stampDutyInput - 375000) * 0.0425 + 12935;
        } else if (firstHomeBuyerYes.checked == true && existingProperty.checked == true && stampDutyInput > 725000) {
            stampDutyResult = (stampDutyInput - 725000) * 0.045 + 27810;
        }
    } else if (state == 'Western Australia') {
        if (firstHomeBuyerYes.checked == true && (newProperty.checked == true || existingProperty.checked == true) && stampDutyInput > 0 && stampDutyInput <= 430000) {
            stampDutyResult = 0;
        } else if (firstHomeBuyerYes.checked == true && (newProperty.checked == true || existingProperty.checked == true) && stampDutyInput > 430000 && stampDutyInput <= 530000) {
            stampDutyResult = (stampDutyInput - 430000) * 0.1919;
        }  else if (firstHomeBuyerYes.checked == true && (newProperty.checked == true || existingProperty.checked == true) && stampDutyInput > 530000 && stampDutyInput <= 725000) {
            stampDutyResult = (stampDutyInput - 360000) * 0.0475 + 11115;
        } else if (firstHomeBuyerYes.checked == true && (newProperty.checked == true || existingProperty.checked == true) && stampDutyInput > 725000) {
            stampDutyResult = (stampDutyInput - 725000) * 0.0515 + 28453;
        } 
        if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput > 0 && stampDutyInput <= 300000) {
            stampDutyResult = 0;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput > 300000 && stampDutyInput <= 400000) {
            stampDutyResult = (stampDutyInput - 300000) * 0.1301;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput > 400000 && stampDutyInput <= 725000) {
            stampDutyResult = (stampDutyInput - 360000) * 0.0475 + 11115;
        } else if (firstHomeBuyerYes.checked == true && vacantLand.checked == true && stampDutyInput > 725000) {
            stampDutyResult = (stampDutyInput - 725000) * 0.0515 + 28453;
        }
        if (firstHomeBuyerYes.checked == false && stampDutyInput > 0 && stampDutyInput <= 120000) {
            stampDutyResult = stampDutyInput * 0.019;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 120000 && stampDutyInput <= 150000) {
            stampDutyResult = (stampDutyInput - 120000) * 0.0285 + 2280;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 150000 && stampDutyInput <= 360000) {
            stampDutyResult = (stampDutyInput - 150000) * 0.038 + 3135;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 360000 && stampDutyInput <= 725000) {
            stampDutyResult = (stampDutyInput - 360000) * 0.0475 + 11115;
        } else if (firstHomeBuyerYes.checked == false && stampDutyInput > 725000) {
            stampDutyResult = (stampDutyInput - 725000) * 0.0515 + 28453;
        }
    }
    
    resultStampDuty.innerHTML = stampDutyResult; 
    let formatted = new Intl.NumberFormat('fr-FR').format(resultStampDuty.innerHTML);
    resultStampDuty.innerHTML = formatted;
    console.log('calculate finished result: ' + stampDutyResult);    
};



