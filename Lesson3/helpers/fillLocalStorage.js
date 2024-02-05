export function fillLocalStorage(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((product) => {
        localStorage.setItem(product.id, JSON.stringify(product));
      });
      localStorage.setItem('productBase', JSON.stringify(data));
    });
}
