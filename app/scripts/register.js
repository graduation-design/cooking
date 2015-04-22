(function (document) {
  'use strict';
  var register = document.querySelector('#register');

  register.moreDetail = false;

  register.showDetail = function(){
    this.moreDetail = true;
  };

  register.submitForm = function (ev) {
    var form = this.$['register-form'];
    var inputs = form.querySelectorAll('paper-input-decorator');
    var submitable = true;

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].validate();
      submitable = !inputs[i].isInvalid;
    }

    if (submitable)
      this.$['login-form'].submit();
  };

  register.addEventListener('template-bound', function() {
    //console.log(this.moreDetail);
  });

})(wrap(document));
