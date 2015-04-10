(function (document) {
  'use strict';

  var uploadCookbook = document.querySelector('#upload_cookbook');

  uploadCookbook.ingredients = [{food_name: '', food_quantity: ''}, {food_name: '', food_quantity: ''}];
  uploadCookbook.steps = [{step_content: ''}, {step_content: ''}, {step_content: ''}];

  uploadCookbook.addEventListener('template-bound', function () {
  });
})(wrap(document));
