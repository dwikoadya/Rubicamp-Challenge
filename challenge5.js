function stringManipulation(word) {
  huruf = word.charAt(0);
  if (huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf ==='o') {
    console.log(word)
  } else {
    console.log(word.slice(1) + word.slice(0,1) + 'nyo');
  }
}

stringManipulation('ayam');
stringManipulation('bebek');
