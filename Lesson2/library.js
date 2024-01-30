class Library {
  constructor(books = []) {
    books.forEach((book) => {
      this.#checkTitle(book);
    });
    if (new Set([...books]).size !== books.length) {
      throw Error("Во входных данных есть дубликаты");
    }
    this.books = [...books];
  }
  #checkTitle(title) {
    if (typeof title !== "string") {
      throw new Error("не могу обработать название, не тот тип данных");
    }
  }
  addBook(title) {
    this.#checkTitle(title);

    if (this.books.includes(title)) {
      throw new Error("Книга уже в библиотеке");
    }
    return this.books.push(title);
  }
  removeBook(title) {
    this.#checkTitle(title);

    if (this.books.includes(title)) {
      this.books = this.books.filter((book) => book !== title);
    } else {
      throw new Error("Такой книги нет");
    }
  }
  hasBook(title) {
    this.#checkTitle(title);

    return this.books.includes(title);
  }
}

const library = new Library([
  "Атлант расправил плечи",
  "Убить пересмешника",
  "Что страшное грядет",
  "Вий",
]);
console.log(library);
library.addBook("Таинственный остров");
console.log(library);
library.addBook("1984"); //на циферный формат возвращает ошибку
console.log(library);
library.removeBook("1984");
console.log(library);
console.log(library.hasBook("1984"));
console.log(library.hasBook("Вий"));
