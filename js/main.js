const modifiers = {
  imgThumbnailActive:"image-showcase__thumbnail--active"
};

const elSiteHeaderCartLink = document.querySelector('.js-site-header__cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');


// SITE-HEADER-CART
if(elSiteHeaderCartLink){
  elSiteHeaderCartLink.addEventListener('click', function(evt){
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open');
  });
}

const elsImageShowcaseButton = document.querySelectorAll('.image-showcase__thumbnail-button');
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