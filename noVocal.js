const regex = /[aeiou]/gi;
function NoVocals(text) {
  const vocalLess = text.replace(regex, "");
  console.log(vocalLess);
}

NoVocals("Esto es otra prueba");
