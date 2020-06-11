'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wisardsQantity = 4;
var wizards = [];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createWizars = function (count) {
  for (var i = 0; i < count; i++) {
    wizards.push({
      name: WIZARD_NAMES[getRandomNumber(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomNumber(0, WIZARD_SURNAMES.length)],
      coatColor: COAT_COLOR[getRandomNumber(0, COAT_COLOR.length)],
      eyesColor: EYES_COLOR[getRandomNumber(0, EYES_COLOR.length)]
    });
  }
};

createWizars(wisardsQantity);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var renderWizars = function (count) {
  for (var i = 0; i < count; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
};

renderWizars(wisardsQantity);

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupInputName = setup.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard-appearance');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireballColor = document.querySelector('.setup-fireball-wrap');


var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && setupInputName !== document.activeElement) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLOR[getRandomNumber(0, COAT_COLOR.length)];
  setupWizard.querySelector('input[name="coat-color"]').value = COAT_COLOR[getRandomNumber(0, COAT_COLOR.length)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLOR[getRandomNumber(0, EYES_COLOR.length)];
  setupWizard.querySelector('input[name="eyes-color"]').value = EYES_COLOR[getRandomNumber(0, EYES_COLOR.length)];

});

fireballColor.addEventListener('click', function () {
  fireballColor.style.backgroundColor = FIREBALL_COLOR[getRandomNumber(0, FIREBALL_COLOR.length)];
  fireballColor.querySelector('input[name="fireball-color"]').value = FIREBALL_COLOR[getRandomNumber(0, FIREBALL_COLOR.length)];
});

