const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];
const ids = [1, 2, 3, 4];
const container = document.getElementById("reviews");
const form = document.getElementById("reviewForm");
const select = document.getElementById("product");

class review {
  constructor(id, text) {
    this._id = id;
    this.text = text;
  }
}
initialData.forEach((product, index) => {
  select.insertAdjacentHTML(
    "afterbegin",
    `<option value=${index}>${product.product}</oprion>`
  );
});
initialData.forEach((product, index) => {
  container.insertAdjacentHTML(
    "afterbegin",
    `<div  >
    <p class='product' >${product.product}<p>
    <div class='review'  id=${index}></div>`
  );
});
initialData.forEach((product, index) => {
  const reviewProductContainer = document.getElementById(`${index}`);
  product.reviews.forEach((review) => {
    reviewProductContainer.insertAdjacentHTML(
      "afterbegin",
      ` <p  id=${review.id}>${review.text}</p>`
    );
  });
});
form.onsubmit = (e) => {
  e.preventDefault();
  const review = e.target[0].value;
  const id = Math.max(...ids) + 1;

  ids.push(id);
  const product = document.getElementById(e.target[1].value);
  product.insertAdjacentHTML("afterbegin", ` <p  id=${id}>${review}</p>`);
};
