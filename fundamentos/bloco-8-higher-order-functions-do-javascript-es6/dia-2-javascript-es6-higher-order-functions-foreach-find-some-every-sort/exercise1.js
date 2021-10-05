const assert = require('assert');

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

//Adicione o código do exercício aqui:

// Exercício 1
function authorBornIn1947() {
  // escreva aqui o seu código
  const findAuthor = (element) => element.author.birthYear === 1947;
  const isAuthor = books.find(findAuthor);
  return isAuthor.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');


// Exercício 2
function smallerName() {
  // escreva aqui o seu código
  let nameBook;
  let lengthOfSmallerNameBook = books[0].name.length;
  nameBook = books[0].name;

  books.forEach((book) => {
    if (book.name.length < lengthOfSmallerNameBook) {
      lengthOfSmallerNameBook = book.name.length;
      nameBook = book.name;
    }
  });
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

// Exercício 3
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  const findName = (element) => { 
    const nameOfBook = element.name;
    return nameOfBook.length === 26;
  }
  const book = books.find(findName);
  return book;
}

assert.deepStrictEqual(getNamedBook(), expectedResult);

// Exercício 4 

const expectedResult1 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
  return(books);
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult1);

// Exercício 5

const expectedResult2 = false;

function everyoneWasBornOnSecXX() {
  const callBack = (book) => {
    book.author.birthYear > 1900 && book.author.birthYear <= 2000
  };

  const verifyAge = books.every(callBack);

  return verifyAge;

  // return books.every((book) => (
  //   book.author.birthYear > 1900 && book.author.birthYear <= 2000
  // ));
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult2);

// Exercício 6 

const expectedResult3 = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  const callBack = (book) => book.releaseYear >= 1980 && book.releaseYear <= 1989;

  const verifyBookAge = books.some(callBack);
  return verifyBookAge;

  // return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult3);


// Exercício 7

const expectedResult4 = false;

function authorUnique() {
  // escreva seu código aqui
  
  return books.every((book) => 
  !books.some((bookSome) =>
  (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)
   ));
}

assert.strictEqual(authorUnique(), expectedResult4);