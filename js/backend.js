'use strict';

(function () {
  var URL_LOAD = 'https://javascript.pages.academy/code-and-magick/data';
  var URL_SAVE = 'https://javascript.pages.academy/code-and-magick';
  var TIMEOUT_IN_MS = 10000;
  var JSON_RESPONSE_TYPE = 'json';

  var StatusCode = {
    OK: 200
  };
  var Method = {
    GET: 'GET',
    POST: 'POST',
  };

  var request = function (method, data, url, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = JSON_RESPONSE_TYPE;

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open(method, url);
    xhr.send(data);
  };

  var load = function (onLoad, onError) {
    request(Method.GET, null, URL_LOAD, onLoad, onError);
  };

  var save = function (data, onLoad, onError) {
    request(Method.POST, data, URL_SAVE, onLoad, onError);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
