function sentencesManipulation(sentence) {
  var z = sentence.split(" ");
  var str = '';
    for (let i = 0; i < z.length; i++) {
      str += stringManipulation(z[i]) + ' ';
    }
    console.log(str);
}


function stringManipulation(word) {
  huruf = word.charAt(0);
  if (huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf ==='o') {
    return word
  } else {
    return word.slice(1) + word.slice(0,1) + 'nyo';
  }
}

sentencesManipulation('ibu pergi ke pasar bersama aku');
