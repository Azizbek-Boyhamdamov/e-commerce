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

const elProductPageGallery = document.querySelector('.product-page__gallery');
const elsImageShowcaseButton = elProductPageGallery.querySelectorAll('.js-image-thumbnail-button');
const elImageShowcaseBigImage = elProductPageGallery.querySelector('.image-showcase__active-img');
const elsImgShowcaseThumbnail = elProductPageGallery.querySelectorAll('.image-showcase__thumbnail');

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

// LIGHTBOX SHOWCASE

const elImageLightBigImage = elLightbox.querySelector('.image-showcase__active-img');
const elsImageLightboxButton = elLightbox.querySelectorAll('.js-image-lightbox-button');
const elsImgLightboxThumbnail = elLightbox.querySelectorAll('.image-showcase__thumbnail');


// DEACTIVATE THUMBNAIL
function deactivateImgLightboxThumbnail(){
  elsImgLightboxThumbnail.forEach(function(elImgLightboxThumbnail){
    elImgLightboxThumbnail.classList.remove(modifiers.imgThumbnailActive)
  });
}

// THUMBNAIL CLICK

elsImageLightboxButton.forEach(function(elImageLightboxButton){
  elImageLightboxButton.addEventListener('click',function(){
    // DEACTIVATE  THUMBNAIL
    deactivateImgLightboxThumbnail();
    // ACTIVATE CLICKED THUMBNAIL
    elImageLightboxButton.parentElement.classList.add(modifiers.imgThumbnailActive)

    // UPDATE IMAGE SOURCE
    elImageLightBigImage .src = elImageLightboxButton.dataset.bigImg;
    // UPDATE IMAGE SRCSET
    elImageLightBigImage .srcset = `${elImageLightboxButton.dataset.bigImg} 1x, ${elImageLightboxButton.dataset.bigImgRetina} 2x`;
  });
});

// lIGHTBOX CONTROL

const elLightboxControlPrev = elLightbox.querySelector(".js-lightbox-control-prev");
const elLightboxControlNext = elLightbox.querySelector(".js-lightbox-control-next");
// LIGHTBOX CONTROL NEXT
if(elLightboxControlNext){
  elLightboxControlNext.addEventListener('click', function(){
    // Find active li element
    const elActiveItem = elLightbox.querySelector('.image-showcase__thumbnail--active');
    // Remove active element's active
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

    if(elActiveItem.nextElementSibling === null){
      elNextActiveItem = elsImgLightboxThumbnail[0]
    }else{
      elNextActiveItem = elActiveItem.nextElementSibling;
    }

    elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

    // UPDATE IMAGE SOURCE
    elImageLightBigImage.src = elNextActiveItem.children[0].dataset.bigImg;
    // UPDATE IMAGE SRCSET
    elImageLightBigImage.srcset = `${elNextActiveItem.children[0].dataset.bigImg} 1x, ${elNextActiveItem.children[0].dataset.bigImgRetina} 2x`;
  });
}

// LIGHTBOX CONTROL PREVIUOS

if(elLightboxControlPrev){
  elLightboxControlPrev.addEventListener('click', function(){
    // Find active li element
    const elActiveItem = elLightbox.querySelector('.image-showcase__thumbnail--active');
    // Remove active element's active
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elPrevActiveItem;

    if(elActiveItem.previousElementSibling === null){
      elPrevActiveItem = elsImgLightboxThumbnail[elsImgLightboxThumbnail.length -1]
    }else{
      elPrevActiveItem = elActiveItem.previousElementSibling;
    }

    elPrevActiveItem.classList.add(modifiers.imgThumbnailActive);

    // UPDATE IMAGE SOURCE
    elImageLightBigImage.src = elPrevActiveItem.children[0].dataset.bigImg;
    // UPDATE IMAGE SRCSET
    elImageLightBigImage.srcset = `${elPrevActiveItem.children[0].dataset.bigImg} 1x, ${elPrevActiveItem.children[0].dataset.bigImgRetina} 2x`;
  });
}