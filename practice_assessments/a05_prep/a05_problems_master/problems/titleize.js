// Write a method that capitalizes each word in a string like a book title
// Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'

const titleize = (title) => {
  const dont = ['a', 'and', 'of', 'over', 'the']

  let words = title.split(" ");
  let book = [];
  for (var i = 0; i < words.length; i++) {
    if (i === 0) {
      let newWord = words[i][0].toUpperCase() + words[i].slice(1)
      book.push(newWord);
    }
    else if (dont.includes(words[i])) {
      book.push(words[i]);
    } else {
      newWord = words[i][0].toUpperCase() + words[i].slice(1)
      book.push(newWord);
    }
  }
  return book.join(" ");
};


console.log(titleize("the bridge over the river kwai"));
