const paginate = (data) => {
  const itemsOnapage = 8;
  const noOfPages = Math.ceil(data.length / itemsOnapage);
  const arrayOfPages = Array.from({ length: noOfPages }, (array, index) => {
    const start = index * itemsOnapage;
    const end = start + itemsOnapage;
    return data.slice(start, end);
  });
  return arrayOfPages;
};
export default paginate;

// 0, 8
// 8, 16
// 16, 24
