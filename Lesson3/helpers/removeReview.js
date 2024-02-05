function removeReview(event, product) {
  const productToRemove = JSON.parse(localStorage.getItem(product));
  const reviewId = event.target.parentNode.dataset.reviewId;

  const newProduct = {
    ...productToRemove,
    reviews: productToRemove.reviews.filter(
      (review) => review.id !== Number.parseInt(reviewId)
    ),
  };
  console.log(newProduct);
  // delete productToRemove.reviews[reviewId];
  localStorage.setItem(product, JSON.stringify(newProduct));
  event.target.parentNode.remove();
  let reviewsNumber = event.target.parentNode.textContent.slice(6);
  console.log(reviewsNumber);
}
