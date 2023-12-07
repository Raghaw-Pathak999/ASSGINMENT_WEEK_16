const books = [
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        year: 2010,
    },
    {
        title: "The God of",
        author: "Arundhati Roy",
        year: 1997,
    },
    {
        title: "A Suitable Boy",
        author: "Vikram Seth",
        year: 1993,
    },
    {
        title: "The White Tiger",
        author: "Aravind Adiga",
        year: 2018,
    },
    {
        title: "Midnight's Children",
        author: "Salman Rushdie",
        year: 1981,
    },
];

function selectOUT (bookList) {
    let outedBOOK = bookList.filter(book => book.year >= 1997)
    return outedBOOK
}

console.log(selectOUT(books));