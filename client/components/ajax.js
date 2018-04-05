import $ from 'jquery';

const ajax = {
  get: (cb) => {
    $.ajax({
      url: '/btc',
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        cb(data);
      },
      err: (err) => {
        console.error(err);
      },
    });
  },
};


export default ajax;
