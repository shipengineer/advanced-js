function toggleReviews(event, id) {
  const topReviewsContainer = document.querySelector('.bestSalesReviews');
  const takinTopReviewsContainer = document.querySelector('.takinTopsReviews');
  const target = event.target;
  if (target.parentNode.classList.contains('topProduct')) {
    topReviewsContainer.innerHTML = '';
    takinTopReviewsContainer.innerHTML = '';
    const product = JSON.parse(localStorage.getItem(`${id}`));

    product.reviews.forEach((review) => {
      topReviewsContainer.insertAdjacentHTML(
        'afterbegin',
        `
  <div class='review' id='${'review' + review.id}>
  <div class='reviewAuthor'>${review.user} </div>
  <div class = 'reviewRating'>Оценка: ${review.rating}</div>
  <div class = 'reviewText'>${review.comment}</div>
  </div>
  `
      );
    });
  } else if (target.parentNode.classList.contains('takinTopProduct')) {
    topReviewsContainer.innerHTML = '';
    takinTopReviewsContainer.innerHTML = '';
    const product = JSON.parse(localStorage.getItem(`${id}`));

    product.reviews.forEach((review) => {
      takinTopReviewsContainer.insertAdjacentHTML(
        'afterbegin',
        `
  <div class='review' id='${'review' + review.id}' data-review-id=${review.id}>
  <div class='reviewAuthor'>${review.user} </div>
  <div class = 'reviewRating'>Оценка: ${review.rating}</div>
  <div class = 'reviewText'>${review.comment}</div>
  <button onClick="removeReview(event,${product.id})">Удалить отзыв</button>
  </div>
  `
      );
    });
  }
}
