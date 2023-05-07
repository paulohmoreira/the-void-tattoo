import { transformData } from './data-converter';

getData();

/**
 * Retrieves data from a Google Sheets spreadsheet and renders it on a webpage.
 * @async
 * @returns {Promise<void>}
 */
async function getData() {
  require('dotenv').config();

  const keyAPI = process.env.API_KEY;
  const spreadsheetId = process.env.SPREADSHEET_ID;

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:Z?key=${keyAPI}`
  );
  const data = await response.json();
  const dataValue = transformData(data.values);

  // Render the data fetched from the spreadsheet
  renderGallery(dataValue.gallery);
}

/**
 * Renders the gallery images on both desktop and mobile devices.
 * @param {string[]} images - An array of image URLs.
 * @returns {void}
 */
function renderGallery(images) {
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
