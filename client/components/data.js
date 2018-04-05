module.exports = (data) => {
  const dates = [];
  const price = [];
  data.forEach((dataPoint) => {
    price.push(dataPoint.price_close);
    dates.push(dataPoint.time_period_start.slice(0, 10));
  });
  const dataObj = {
    labels: dates,
    datasets: [
      {
        label: 'BTC',
        data: price,
      },
    ],
  };
  return dataObj;
};
