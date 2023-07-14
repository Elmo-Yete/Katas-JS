const regex = /[aeiou]/gi;

export default function NoVocals(text) {
  const vocalLess = text.replace(regex, "");
  return vocalLess;
}
