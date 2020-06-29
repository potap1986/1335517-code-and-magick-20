'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard-appearance');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.setup.COAT_COLOR[window.setup.getRandomNumber(0, window.setup.COAT_COLOR.length)];
    setupWizard.querySelector('input[name="coat-color"]').value = window.setup.COAT_COLOR[window.setup.getRandomNumber(0, window.setup.COAT_COLOR.length)];
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.setup.EYES_COLOR[window.setup.getRandomNumber(0, window.setup.EYES_COLOR.length)];
    setupWizard.querySelector('input[name="eyes-color"]').value = window.setup.EYES_COLOR[window.setup.getRandomNumber(0, window.setup.EYES_COLOR.length)];

  });

  fireballColor.addEventListener('click', function () {
    fireballColor.style.backgroundColor = FIREBALL_COLOR[window.setup.getRandomNumber(0, FIREBALL_COLOR.length)];
    fireballColor.querySelector('input[name="fireball-color"]').value = FIREBALL_COLOR[window.setup.getRandomNumber(0, FIREBALL_COLOR.length)];
  });
})();
