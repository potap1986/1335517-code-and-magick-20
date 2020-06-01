'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 40;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = 150;

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура Вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 1.5);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 0.5 );
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 1.9 + barHeight - (barHeight * times[i]) / maxTime);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = 'hsl(240, ' + getRandomNumber(10, 100) + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 2 + barHeight - (barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }
};
