(function (document) {
  'use strict';
  var login = document.querySelector('#login');
  login.submitForm = function (ev) {
    var form = this.$['login-form'];
    var inputs = form.querySelectorAll('paper-input-decorator');
    var submitable = true;

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].validate();
      submitable = !inputs[i].isInvalid;
    }

    if(submitable)
      this.$['login-form'].submit();
  }

})(wrap(document));
