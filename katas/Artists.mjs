export default function countByCountry(array) {
  return array.reduce((countByCountry, record) => {
    const currentCount = countByCountry[record.country] || 0;
    countByCountry[record.country] = currentCount + 1;
    return countByCountry;
  }, {});
}
