const products = JSON.parse(localStorage.getItem('productBase'));
const productsNames = products.map((product) => product.name);
const form = document.getElementById('form');
const selectTag = document.querySelector('select');
productsNames.forEach((name) => {
  selectTag.insertAdjacentHTML(
    'afterbegin',
    `
    <option value='${name}'>${name}</option>
    `
  );
});
form.onsubmit = (e) => {
  e.preventDefault();
  console.log(form.elements.product.value);

  const requiredProduct = products.find(
    (product) => product.name === form.elements.product.value
  );
  requiredProduct.reviews.push({
    id: 99,
    user: 'Stanley',
    comment: form.elements.review.value,
  });
  localStorage.setItem('productBase', JSON.stringify(products));
  form.elements.review.value = '';
};
