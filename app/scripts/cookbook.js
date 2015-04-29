(function (document) {
  'use strict';
  var cookbook = document.querySelector('#cookbook');
  cookbook.comments = [
    {
      avatar:"http://lorempixel.com/80/80",
      user_name: "nick_name",
      timestamp: "15年4月29日",
      content: "啊哈哈哈哈哈！！！"
    },{
      avatar:"http://lorempixel.com/80/80",
      user_name: "nick_name",
      timestamp: "15年4月29日",
      content: "啊哈哈哈哈哈！！！"
    },{
      avatar:"http://lorempixel.com/80/80",
      user_name: "nick_name",
      timestamp: "15年4月29日",
      content: "啊哈哈哈哈哈！！！"
    },{
      avatar:"http://lorempixel.com/80/80",
      user_name: "nick_name",
      timestamp: "15年4月29日",
      content: "啊哈哈哈哈哈！！！"
    }
  ];

  cookbook.addEventListener('template-bound', function() {
    console.log('Our app is ready to rock!');
  });

})(wrap(document));
