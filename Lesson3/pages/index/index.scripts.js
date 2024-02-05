import { fillLocalStorage } from '../../helpers/fillLocalStorage.js';
import { render } from '../../helpers/render.js';
const url =
  'https://my-json-server.typicode.com/shipengineer/JSON_server/products';
const topContainer = document.querySelector('.bestSales');
const takinTopContainer = document.querySelector('.takinTop');
const othersContainer = document.querySelector('.others');
const topReviewsContainer = document.querySelector('.bestSalesReviews');
const takinTopReviewsContainer = document.querySelector('.takinTopsReviews');

fillLocalStorage(url);

render();
