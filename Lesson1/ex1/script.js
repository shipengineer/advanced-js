const musicCollection = {
  albums: [
    { artist: "SOAD", title: "Toxicity", year: "2021" },
    { artist: "SOAD", title: "Mezmerize", year: "2005" },
    { artist: "Anacondaz", title: "Выходи за меня", year: "2017" },
    { artist: "Anacondaz", title: "Смачные ништяки", year: "2008" },
  ],
  [Symbol.iterator]: function () {
    let counter = 0;
    return {
      next: () => {
        if (counter < this.albums.length) {
          return { done: false, value: this.albums[counter++] };
        } else {
          return { done: true };
        }
      },
    };
  },
};
for (const album of musicCollection) {
  console.log(album);
}

for (const album of musicCollection) {
  console.log(album);
}
