const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

console.log(`

Exercise 1:

`
);

function formatedBookNames() {
  // escreva seu código aqui
  const newFormat = books.map((book) => {
    return `${book.name} - ${book.genre} - ${book.author.name}`
  });
  return newFormat;
}
console.log(formatedBookNames());

console.log(`

Exercise 2:

`
);

function nameAndAge() {
  // escreva seu código aqui
  const authorAndAge = books.map((book) =>{
    return {
      age: `${book.releaseYear - book.author.birthYear}`,
      author : book.author.name,
    }
  });
  return authorAndAge.sort((book1, book2) => book1.age - book2.age);
}
console.log(nameAndAge());

console.log(`

Exercise 3:

`
);

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  const genreBook = books.filter((book) => {
    return book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
  });
  return genreBook;
}
console.log(fantasyOrScienceFiction());

console.log(`

Exercise 4:

`
);

function oldBooksOrdered() {
  // escreva seu código aqui
  const oldBooks = books.filter((book) => {
    let date = new Date();
    let count = date.getFullYear() - 60;
    return book.releaseYear < count;
  });
  return oldBooks.sort((book1, book2) => book1.releaseYear - book2.releaseYear);
}

console.log(oldBooksOrdered());

console.log(`

Exercise 5:

`
);

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const filterBookGenre = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  const getAuthors = filterBookGenre.map((book) => book.author.name);
  return getAuthors.sort();
}

console.log(fantasyOrScienceFictionAuthors());

console.log(`

Exercise 6:

`
);

function oldBooks() {
  // escreva seu código aqui
  const filterOldBooks = books.filter((book) =>{
    let date = new Date();
    let count = date.getFullYear() - 60;
    return book.releaseYear < count;
  });
  const getNamesOfBook = filterOldBooks.map((book) => book.name);
  return getNamesOfBook;
}
console.log(oldBooks());


console.log(`

Exercise 7:

`
);

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.find((book) => (
    book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
  )).name;
}

console.log(authorWith3DotsOnName());