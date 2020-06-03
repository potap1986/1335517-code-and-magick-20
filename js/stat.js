'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 40;
var BAR_WIDTH = 40;
var barHeight = 150;
var MIN_SATURATION = 10;
var MAX_SATURATION = 100;

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  arr.forEach(function (elem) {
    if (elem > maxElement) {
      maxElement = elem;
    }
  });

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура Вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 1.5);

  var maxTime = getMaxElement(times);

  players.forEach(function (elem, i) {
    ctx.fillStyle = '#000';
    ctx.fillText(elem, CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 0.5);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 1.9 + barHeight - (barHeight * times[i]) / maxTime);
    if (elem === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + getRandomNumber(MIN_SATURATION, MAX_SATURATION) + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 2 + barHeight - (barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  });
};
