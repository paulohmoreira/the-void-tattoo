import { transformData } from './data-converter';
import { createCarousel } from './carousel';
import { renderReviews } from './reviews';
import { renderGallery } from './gallery';

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
  renderReviews(dataValue.reviews);

  // Active carousel on the reviews section
  createCarousel();
}
