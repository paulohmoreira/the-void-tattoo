/**
 * Renders the gallery images on both desktop and mobile devices.
 * @param {string[]} images - An array of image URLs.
 * @returns {void}
 */
export function renderGallery(images) {
  const galleryImagesDesktop = document.querySelectorAll('.gallery .row img');
  const galleryImagesMobile = document.querySelectorAll('.gallery-swiper img');

  changeGalleryImages(galleryImagesDesktop, images);
  changeGalleryImages(galleryImagesMobile, images);
}

/**
 * Changes the source URLs of the given images to the ones provided in the images array.
 * @param {NodeListOf<HTMLImageElement>} element - A collection of HTML image elements.
 * @param {string[]} images - An array of image URLs.
 * @returns {void}
 */
function changeGalleryImages(element, images) {
  if (element) {
    element.forEach((img, index) => {
      img.src = images[index];
    });
  }
}
