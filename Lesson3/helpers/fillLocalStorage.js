export function fillLocalStorage(url) {
  if (localStorage.getItem('alreadyFetched') === 'true') {
    console.log('уже фечилось');
    return;
  }

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
  localStorage.setItem('alreadyFetched', 'true');
}
