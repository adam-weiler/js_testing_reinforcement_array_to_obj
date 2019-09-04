const arrayToObj = (arr) => {
   // console.log(arr);
   return arr.reduce((a, [b, c]) => (a[b] = c, a), {});
}

module.exports = arrayToObj;
