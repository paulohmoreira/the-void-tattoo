/**
 * Renders a carousel of reviews on the webpage.
 * @param {Object[]} reviews - An array of review objects, with the following properties:
 *   @param {string} content - The text content of the review.
 *   @param {string} author - The name of the reviewer.
 *   @param {string} role - The role or title of the reviewer.
 * @returns {void}
 */
export function renderReviews(reviews) {
  const reviewsCardWrapper = document.querySelector('.reviews .carousel');
  if (!reviewsCardWrapper) return;

  const carouselViewport = document.createElement('div');
  carouselViewport.classList.add('carousel__viewport', 'snaps-inline');
  carouselViewport.ariaLabel = 'Reviews Carousel';

  reviews.forEach((review, index) => {
    const slide = createReviewSlide(review, index, reviews.length);
    carouselViewport.appendChild(slide);
  });

  reviewsCardWrapper.appendChild(carouselViewport);
}

/**
 * Creates a single slide for a review carousel.
 * @param {Object} review - The review object, with the following properties:
 *   @param {string} content - The text content of the review.
 *   @param {string} author - The name of the reviewer.
 *   @param {string} role - The role or title of the reviewer.
 * @param {number} index - The index of the current review in the reviews array.
 * @param {number} total - The total number of reviews in the reviews array.
 * @returns {HTMLElement} The DOM element for the review slide.
 */
function createReviewSlide(review, index, total) {
  const slide = document.createElement('div');
  slide.id = `carousel__slide${index + 1}`;
  slide.classList.add('carousel__slide');
  slide.setAttribute('aria-label', `slide ${index + 1} of ${total}`);

  const reviewText = document.createElement('p');
  reviewText.innerHTML = `${review.content}<span><strong>${review.author}</strong> | ${review.role}</span>`;
  slide.appendChild(reviewText);

  return slide;
}
