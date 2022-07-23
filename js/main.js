const modifiers = {
  siteHeaderCardModalOpener:"site-header__cart-modal--open",
  imgThumbnailActive:"image-showcase__thumbnail--active",
  lightboxOpen:'lightbox--open'
};

const elSiteHeaderCartLink = document.querySelector('.js-site-header__cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');


// SITE-HEADER-CART
if(elSiteHeaderCartLink){
  elSiteHeaderCartLink.addEventListener('click', function(evt){
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCardModalOpener);
  });
}

const elsImageShowcaseButton = document.querySelectorAll('.js-image-thumbnail-button');
const elImageShowcaseBigImage = document.querySelector('.image-showcase__active-img');
const elsImgShowcaseThumbnail = document.querySelectorAll('.image-showcase__thumbnail');

// DEACTIVATE THUMBNAIL
function deactivateImgShowcaseThumbnail(){
  elsImgShowcaseThumbnail.forEach(function(elImgShowcaseThumbnail){
    elImgShowcaseThumbnail.classList.remove(modifiers.imgThumbnailActive)
  });
}

elsImageShowcaseButton.forEach(function(elImageShowcaseButton){
  elImageShowcaseButton.addEventListener('click',function(){
    // DEACTIVATE  THUMBNAIL
    deactivateImgShowcaseThumbnail();
    // ACTIVATE CLICKED THUMBNAIL
    elImageShowcaseButton.parentElement.classList.add(modifiers.imgThumbnailActive)

    // UPDATE IMAGE SOURCE
    elImageShowcaseBigImage.src = elImageShowcaseButton.dataset.bigImg;
    // UPDATE IMAGE SRCSET
    elImageShowcaseBigImage.srcset = `${elImageShowcaseButton.dataset.bigImg} 1x, ${elImageShowcaseButton.dataset.bigImgRetina} 2x`;
  });
});

// LIGHTBOX

const elLightbox = document.querySelector('.lightbox');
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elLightboxClose = document.querySelector('.js-lightbox-close-toggler');

if(elLightboxToggler){
  elLightboxToggler.addEventListener('click', function(){
    elLightbox.classList.add(modifiers.lightboxOpen);
  });
}

if(elLightboxClose){
  elLightboxClose.addEventListener('click', function(){
    elLightbox.classList.remove(modifiers.lightboxOpen);
  });
}