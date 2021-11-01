const navigationClotheDropdownButton = document.querySelector('.navigation__item_dropdown-clothes');
const dropdownClothesContent = document.querySelector('.navigation__clothes-dropdown-content');

const navigationAccessoDropdownButton = document.getElementById('accessor-dropdown');
const dropdownAccesorContent = document.getElementById('accessor-dropdown-content');

const dropdownKitchenButton = document.getElementById('kithcen-dropdown');
const dropdownKitchenContent = document.getElementById('kithcen-dropdown-content');

const dropdownSmartWatchButton = document.getElementById('more-dropdown');
const dropdownSmartWatchContent = document.getElementById('more-dropdown-content');

function addDropDOwnListeners(button, content) {

  button.addEventListener('mouseover', function () {
    content.classList.add('show');
  })
  button.addEventListener('mouseout', function () {
    content.classList.remove('show');
  })
  content.addEventListener('mouseover', function () {
    content.classList.add('show');
  })
  content.addEventListener('mouseout', function () {
    content.classList.remove('show');
  })
}

addDropDOwnListeners(navigationClotheDropdownButton, dropdownClothesContent);
addDropDOwnListeners(navigationAccessoDropdownButton, dropdownAccesorContent);
addDropDOwnListeners(dropdownKitchenButton, dropdownKitchenContent);
addDropDOwnListeners(dropdownSmartWatchButton, dropdownSmartWatchContent);



const limitedEditionSlicker = document.querySelector('.limited-edition__slicker');
const limitedEditionSlickerArrows = document.querySelectorAll('.limited-edition__arrow');
const limitedEditionArrowContainer = document.querySelector('.limited-edition__arrow-container');
$(limitedEditionSlicker).slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  draggable: true,
  arrows: true,
  appendArrows: '.limited-edition__arrow-container',
  nextArrow: '.limited-edition__arrow_next',
  prevArrow: '.limited-edition__arrow_prev',
  appendDots: '.limited-edition__dots-container',
  dotsClass: 'limited-edition__dots'
})

limitedEditionSlickerArrows.forEach(item => item.style.display = 'none');
limitedEditionArrowContainer.addEventListener('mouseover', function () {
  limitedEditionSlickerArrows.forEach((item) => {
    if (window.innerWidth > 600) {
      item.style.display = 'unset';
    }
  });
})

limitedEditionArrowContainer.addEventListener('mouseout', function () {
  limitedEditionSlickerArrows.forEach((item) => {
    if (window.innerWidth > 600) {
      item.style.display = 'none';
    }
  });
})

const ourProductsSmallSlickerLatest = document.querySelector('.small-slicker__slicker_latest');
const ourProductsSmallSlickerBestseller = document.querySelector('.small-slicker__slicker_bestseller');
const ourProductsSmallSlickerSpecial = document.querySelector('.small-slicker__slicker_special');
$(ourProductsSmallSlickerLatest).slick({
  dots: false,
  dragable: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  appendArrows: '.small-slicker__slicker-arrow-container_latest',
  nextArrow: '.small-slicker__slicker-arrow_latest-next',
  prevArrow: '.small-slicker__slicker-arrow_latest-prev',
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})

$(ourProductsSmallSlickerBestseller).slick({
  dots: false,
  dragable: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  appendArrows: '.small-slicker__slicker-arrow-container_bestseller',
  nextArrow: '.small-slicker__slicker-arrow_bestseller-next',
  prevArrow: '.small-slicker__slicker-arrow_bestseller-prev',
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})

$(ourProductsSmallSlickerSpecial).slick({
  dots: false,
  dragable: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  appendArrows: '.small-slicker__slicker-arrow-container_special',
  nextArrow: '.small-slicker__slicker-arrow_special-next',
  prevArrow: '.small-slicker__slicker-arrow_special-prev',
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})


const ourProductsBigSlicker = document.querySelector('.our-products__big-slicker');
$(ourProductsBigSlicker).slick({
  dots: true,
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  appendDots: '.our-products__big-slicker-dots-container',
  dotsClass: 'our-products__big-slicker-dot',
})
const ourProductsBigSliderDots = [];
const latesetDot = document.getElementById('slick-slide-control40');
ourProductsBigSliderDots.push(latesetDot);
const bestSellerDot = document.getElementById('slick-slide-control41');
ourProductsBigSliderDots.push(bestSellerDot);
const specialDot = document.getElementById('slick-slide-control42');
ourProductsBigSliderDots.push(specialDot);

latesetDot.classList.add('our-products__big-slicker-dot');
latesetDot.textContent = 'Latest';
//console.log(latesetDot);
bestSellerDot.classList.add('our-products__big-slicker-dot');
bestSellerDot.textContent = 'Bestsellers';
specialDot.classList.add('our-products__big-slicker-dot');
specialDot.textContent = 'Special';

ourProductsBigSliderDots.forEach((dot) => {
  dot.addEventListener('click', (event) => {
    ourProductsBigSliderDots.forEach((item) => {
      item.classList.remove('our-products__big-slicker-dot_active');
    })
    event.target.classList.add('our-products__big-slicker-dot_active');
  })
})



const ourProductsSmallSlickerSpecials = document.querySelector('.small-slicker__slicker_specials');
//console.log(ourProductsSmallSlickerSpecials);

$(ourProductsSmallSlickerSpecials).slick({
  dots: false,
  dragable: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  appendArrows: '.small-slicker__slicker-arrow-container_specials',
  nextArrow: '.small-slicker__slicker-arrow_specials-next',
  prevArrow: '.small-slicker__slicker-arrow_specials-prev',
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})

const logoSlicker = document.querySelector('.logo-slicker__slicker-itself');
const logoSlicekrItems = document.querySelectorAll('.logo-slicker__slicker-item');
$(logoSlicker).slick({
  dots: false,
  dragable: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  appendArrows: '.logo-slicker__arrows-container',
  nextArrow: '.logo-slicker__slicker-arrow_next',
  prevArrow: '.logo-slicker__slicker-arrow_prev',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})

const latesBlogSlicker = document.querySelector('.latest-blog__slicker');
$(latesBlogSlicker).slick({
  dots: false,
  dragable: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]

})



const navigationSectionContent = document.querySelector('.navigation__content');
const navigationSection = document.querySelector('.navigation');
const searchDropDownMenu = document.querySelector('.search__drop-menu');

const serchSection = document.querySelector('.search');
const searchLogo = document.querySelector('.search__logo');
const searcIcons = document.querySelector('.search__icons');


function moveElement(element, container) {
  container.prepend(element);
}

function setListenerToExpandDropDown(button, dropdown) {
  button.addEventListener('click', () => {
    dropdown.classList.toggle('expand');
  })
}

function setListenerToEpandDropDownAndRotateButton(button, dropdown) {
  console.log(123);
  button.addEventListener('click', () => {
    console.log(1233);
    button.classList.toggle('rotate180');
    dropdown.classList.toggle('expand');
  })
}

const footerContacts = document.querySelector('.footer__contacts');
const footerInformation = document.querySelector('.footer__information');
const footerMyAccount = document.querySelector('.footer__myaccount');
const footerInput = document.querySelector('.footer__input');
const footerSocialMediaIcons = document.querySelector('.footer__social-media-icons');

const footerContactsDropDown = document.querySelector('.footer__drop-down-content_contacts');
const footerInformationDropDown = document.querySelector('.footer__drop-down-content_information');
const footerMyAccountDropDown = document.querySelector('.footer__drop-down-content_myaccount');
const footerSignUpDropDown = document.querySelector('.footer__drop-down-content_signup');
const footerSocialMediaIconsDropDown = document.querySelector('.footer__drop-down-content_social-media');

const footerContactsDropDownButton = document.getElementById('footer-drop-down-contacts');
const footerInformationDropDownButton = document.getElementById('footer-drop-down-information');
const footerMyAccountDropDownButton = document.getElementById('footer-drop-down-myaccount');
const footerSignUpDropDownButton = document.getElementById('footer-drop-down-signup');
const footerSocialMediaDropDownButton = document.getElementById('footer-drop-down-socials');

setListenerToExpandDropDown(footerContactsDropDownButton, footerContactsDropDown);
setListenerToExpandDropDown(footerInformationDropDownButton, footerInformationDropDown);
setListenerToExpandDropDown(footerMyAccountDropDownButton, footerMyAccountDropDown);
setListenerToExpandDropDown(footerSignUpDropDownButton, footerSignUpDropDown);
setListenerToExpandDropDown(footerSocialMediaDropDownButton, footerSocialMediaIconsDropDown);

const footerContent = document.querySelector('.footer__content');
const footerSignUp = document.querySelector('.footer__signup')

window.addEventListener('resize', function () {
  if (window.innerWidth < 700) {
    moveElement(footerContacts, footerContactsDropDown);
    moveElement(footerInformation, footerInformationDropDown);
    moveElement(footerMyAccount, footerMyAccountDropDown);
    moveElement(footerInput, footerSignUpDropDown);
    moveElement(footerSocialMediaIcons, footerSocialMediaIconsDropDown);
  } else {
    footerSignUp.append(footerInput);
    moveElement(footerInformation, footerContent);
    moveElement(footerMyAccount, footerContent);
    moveElement(footerSocialMediaIcons, footerContent);
    moveElement(footerContacts, footerContent);
  }
  if (window.innerWidth < 500) {
    serchSection.prepend(searchLogo);
  } else {
    searcIcons.append(searchLogo);
  }
})

if (window.innerWidth < 700) {
  moveElement(footerContacts, footerContactsDropDown);
  moveElement(footerInformation, footerInformationDropDown);
  moveElement(footerMyAccount, footerMyAccountDropDown);
  moveElement(footerInput, footerSignUpDropDown);
  moveElement(footerSocialMediaIcons, footerSocialMediaIconsDropDown);
} else {
  footerSignUp.append(footerInput);
  moveElement(footerInformation, footerContent);
  moveElement(footerMyAccount, footerContent);
  moveElement(footerSocialMediaIcons, footerContent);
  moveElement(footerContacts, footerContent);
}
if (window.innerWidth < 500) {
  serchSection.prepend(searchLogo);
} else {
  searcIcons.append(searchLogo);
}

const burgerButton = document.querySelector('.search__burger-menu');
const searchDropMenu = document.querySelector('.search__drop-menu');
setListenerToExpandDropDown(burgerButton, searchDropMenu);

const headerDropDownFirstLevelClothes = document.querySelector('.search__drop-menu-first-level-dropdown_clothes');
const headerDropDownFirstLevelButtonClothes = document.querySelector('.search__drop-menu-drop-arrow_clothes');

const headerDropDownFirstLevelAccessories = document.querySelector('.search__drop-menu-first-level-dropdown_accessories');
const headerDropDownFirstLevelButtonAccessories = document.querySelector('.search__drop-menu-drop-arrow_accessories');

const headerDropDownFirstLevelKitchenAccessories = document.querySelector('.search__drop-menu-first-level-dropdown_kitchenaccessories');
const headerDropDownFirstLevelButtonKitchenAccessories = document.querySelector('.search__drop-menu-drop-arrow_kitchenaccessories');

setListenerToEpandDropDownAndRotateButton(headerDropDownFirstLevelButtonClothes, headerDropDownFirstLevelClothes)
setListenerToEpandDropDownAndRotateButton(headerDropDownFirstLevelButtonAccessories, headerDropDownFirstLevelAccessories)
setListenerToEpandDropDownAndRotateButton(headerDropDownFirstLevelButtonKitchenAccessories, headerDropDownFirstLevelKitchenAccessories)
/*
setListenerToExpandDropDown(headerDropDownFirstLevelButtonClothes, headerDropDownFirstLevelClothes);
setListenerToExpandDropDown(headerDropDownFirstLevelButtonAccessories, headerDropDownFirstLevelAccessories);
setListenerToExpandDropDown(headerDropDownFirstLevelButtonKitchenAccessories, headerDropDownFirstLevelKitchenAccessories);
*/

const headerDropDownSecondLevelKids = document.querySelector('.search__drop-menu-second-level-dropdown_kids');
const headerDropDownSecondLevelButtonKids = document.getElementById('drop-arrow-kids');

const headerDropDownSecondLevelMen = document.querySelector('.search__drop-menu-second-level-dropdown_men');
const headerDropDownSecondLevelButtonMen = document.getElementById('drop-arrow-men');

const headerDropDownSecondLevelWomen = document.querySelector('.search__drop-menu-second-level-dropdown_women');
const headerDropDownSecondLevelButtonWomen = document.getElementById('drop-arrow-women');

const headerDropDownSecondLevelBlender = document.querySelector('.search__drop-menu-second-level-dropdown_blender');
const headerDropDownSecondLevelButtonBlender = document.querySelector('.search__drop-menu-first-level-dropdown-item_blender');

setListenerToEpandDropDownAndRotateButton(headerDropDownSecondLevelButtonKids, headerDropDownSecondLevelKids);
setListenerToEpandDropDownAndRotateButton(headerDropDownSecondLevelButtonKids, headerDropDownSecondLevelKids);
setListenerToEpandDropDownAndRotateButton(headerDropDownSecondLevelButtonKids, headerDropDownSecondLevelKids);

/*
setListenerToExpandDropDown(headerDropDownSecondLevelButtonKids, headerDropDownSecondLevelKids);
setListenerToExpandDropDown(headerDropDownSecondLevelButtonMen, headerDropDownSecondLevelMen);
setListenerToExpandDropDown(headerDropDownSecondLevelButtonWomen, headerDropDownSecondLevelWomen);
*/
setListenerToExpandDropDown(headerDropDownSecondLevelButtonBlender, headerDropDownSecondLevelBlender);

const headerMyAccountDropDownButton = document.querySelector('.search__myaccount');
const headerMyAccountDropDown = document.querySelector('.search__myaccount-drop-down');

setListenerToExpandDropDown(headerMyAccountDropDownButton, headerMyAccountDropDown);
