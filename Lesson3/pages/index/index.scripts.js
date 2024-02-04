const url =
  'https://my-json-server.typicode.com/shipengineer/JSON_server/products';
const topContainer = document.querySelector('.bestSales');
const takinTopContainer = document.querySelector('.takinTop');
const othersContainer = document.querySelector('.others');
const topReviewsContainer = document.querySelector('.bestSalesReviews');
const takinTopReviewsContainer = document.querySelector('.takinTopsReviews');

const fillLocalStorage = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      localStorage.setItem('productBase', JSON.stringify(data));
    });
};

fillLocalStorage(url);

function render() {
  const changeableBase = JSON.parse(localStorage.getItem('productBase'));
  const topThree = [];
  const takinTop = [];
  const others = [];
  for (let index = 0; index < changeableBase.length; index++) {
    if (index < 3) {
      topThree.push(changeableBase[index]);
    } else if (index >= 3 && index < 6) {
      takinTop.push(changeableBase[index]);
    } else {
      others.push(changeableBase[index]);
    }
  }
  topThree.forEach((product) => {
    console.log(product);
    topContainer.insertAdjacentHTML(
      `beforeend`,
      `
  <div class='topProduct' id = ${product.id}>
  <a href="/Lesson3/pages/product/product.html" onClick='stateHandler(event,${product.id})'>${product.name}</a>
  <div class ='rating'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
  <button onClick="toggleReviews(event,${product.id})">Отзывы:${product.reviews.length}</button>
  </div>`
    );
  });
  console.log(takinTop);
  takinTop.forEach((product) => {
    takinTopContainer.insertAdjacentHTML(
      'beforeend',
      `
  <div class='takinTopProduct' id = ${product.id}>
  <a href="/Lesson3/pages/product/product.html" onClick='stateHandler(${product.id})'>${product.name}</a>
  <div class ='rating'>&#11088;&#11088;&#11088;</div>
  <button onClick="toggleReviews(event,${product.id})">Отзывы:${product.reviews.length}</button>
  </div>
    `
    );
  });
  others.forEach((product) => {
    othersContainer.insertAdjacentHTML(
      'beforeend',
      `
  <div class='otherProduct' id = ${product.id}>
  <a href="/Lesson3/pages/product/product.html" onClick='stateHandler(event,${product.id})'>${product.name}</a>
  <button onClick='stateHandler(event, ${product.id})'>Отзывы:${product.reviews.length}</button>
  </div>
    `
    );
  });
}
function toggleReviews(event, id) {
  const target = event.target;
  console.log(target.parentNode.classList.contains('topProduct'));
  if (target.parentNode.classList.contains('topProduct')) {
    localStorage.getItem();
    const product = topThree.find((elem) => {
      elem.id === id;
    });
    console.log(product);
    topReviewsContainer.insertAdjacentHTML(
      'afterbegin',
      `
    <div class='topReview' id=
    `
    );
  }
}
function stateHandler(id) {}
render();
