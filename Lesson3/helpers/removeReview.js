 function removeReview(event, product) {
  const productToRemove = JSON.parse(localStorage.getItem(product));
  const reviewId = event.target.parentNode.dataset.reviewId;
  console.log(productToRemove.reviews.find((review) => review.id === reviewId));
  // delete productToRemove.reviews[reviewId];
  localStorage.setItem(product, JSON.stringify(productToRemove));
  event.target.parentNode.remove();
}
