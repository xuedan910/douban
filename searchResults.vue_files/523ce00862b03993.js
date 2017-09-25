
  ;(function() {

    'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory();
  } else {
    if (root.SWCache && root.console && console.warn) {
      console.warn('window.Lazify already exists! Skipped');
    }
    root.SWCache = root.SWCache || factory();
  }
})(window, function () {

  var UA = function () {
    var userAgent = navigator.userAgent || '';

    function detect(pattern) {
      return function () {
        return pattern.test(userAgent);
      };
    }

    return {
      isWeixin: detect(/micromessenger/i),
      isWeibo: detect(/weibo/i),
      isXiaomi: detect(/xiaomi/i),
      isBaidu: detect(/baiduboxapp|baidubrowser/i),
      isIOS: detect(/iphone|ipad|ipod/i),
      isAndroid: detect(/android/i),
      isMobile: detect(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i),
      isFrodo: detect(/com\.douban\.frodo/i)
    };
  }();

  function genHash(str) {
    var hash = 0;
    for (var i in str) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }
  ;
  function Debug(prefix, enabled) {
    var debug = void 0;
    if (enabled) {
      Debug.state[prefix] = true;
    }
    var state = prefix in Debug.state ? Debug.state[prefix] : Debug.defaultState;
    if (state === false) {
      debug = Debug.noop;
    } else {
      var color = Debug.selectColor(prefix);
      debug = function debug() {
        var _console;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_console = console).log.apply(_console, ['%c' + prefix + '%c', 'color: ' + color + ';', 'color: inherit;'].concat(args));
      };
      debug.isEnable = true;
    }
    return debug;
  }
  Debug.noop = function () {};
  Debug.noop.isEnable = true;
  Debug.state = {};
  Debug.defaultState = false;

  Debug.enable = function (enable) {
    if ((typeof enable === 'undefined' ? 'undefined' : _typeof(enable)) === 'object') {
      Debug.state = _extends({}, Debug.state, enable);
    } else if (typeof enable === 'string') {
      Debug.state = _extends({}, Debug.state, _defineProperty({}, enable, true));
      return Debug(enable);
    } else {
      Debug.defaultState = enable;
    }
  };

  Debug.selectColor = function (prefix) {
    return Debug.colors[Math.abs(genHash(prefix)) % Debug.colors.length];
  };

  Debug.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson', 'yellow'];

  Debug.logErr = function () {
    if (typeof console !== 'undefined' && console.error) {
      var _console2;

      (_console2 = console).error.apply(_console2, arguments);
    }
  };
  var debug = Debug.noop;
  var defaults = {
    serviceWorkerUrl: '/pwa/cache_worker',
    scope: '/',
    debug: false,
    precache: [],
    currentPath: location.pathname,
    offlineUrl: '/pwa/offline',

    onNetworkChange: null
  };

  var settings = _extends({}, defaults);

  function cloneMsgSettings(settings) {
    return Object.keys(settings).reduce(function (newSettings, key) {
      var type = _typeof(settings[key]);
      if (type !== 'function') {
        newSettings[key] = settings[key];
      }
      return newSettings;
    }, {});
  }

  function start() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _navigator = navigator,
        serviceWorker = _navigator.serviceWorker;

    if (!serviceWorker) return;
    settings = _extends({}, settings, options);
    if (settings.debug) {
      debug = Debug('pwa:cache', true);
    }

    debug('settings', settings);
    serviceWorker.register(settings.serviceWorkerUrl, { scope: settings.scope }).then(function (registration) {
      debug('register', registration);

      if (UA.isFrodo() || UA.isWeixin() || UA.isWeibo() || UA.isXiaomi() || UA.isBaidu() || typeof DISABLE_SERVICE_WORKER !== 'undefined') {
        return registration.unregister().then(function (ret) {
          return debug('Unregister Service Worker[' + settings.serviceWorkerUrl + ']: ' + ret);
        });
      }

      var messenger = registration.installing || registration.active || serviceWorker.controller;
      messenger.postMessage({ 'action': 'set-settings', 'settings': cloneMsgSettings(settings) });
    }).catch(Debug.logErr);
  }
  return { start: start };
});

    SWCache.start({
      // debug: false,
      currentPath: location.pathname,
      precache: [
        'https://img3.doubanio.com/f/talion/f8b8fa66f110083144daf3f89367db3ef5a0bee1/pics/card/offline/ic_offline.png',
        'https://img3.doubanio.com/f/talion/6cd76c90e48131ae42f06eaa7026efaf8e741758/pics/card/offline/ic_refresh.png',
        'https://img3.doubanio.com/f/talion/3c45a4b3705e30953879f6078082cbd1b9f88858/css/card/base.css',
        'https://img3.doubanio.com/f/talion/ee8e0c54293aefb5709ececbdf082f8091ad5e49/js/lib/zepto/zepto.min.js',
        'https://img3.doubanio.com/f/talion/26ca03a0fa7ee78dbaa48257feaf3571b91ab3a7/js/card/main.js',
        'https://img3.doubanio.com/f/talion/edb4a934937733a0163b69e6cc3ad3f689c92d1c/pics/card/defaults/cover.png',
        'https://img3.doubanio.com/f/talion/9c85529e7a0fbe585a2091edd8b9751a1db10ca9/pics/card/defaults/avatar.jpg',
      ],
      offlineUrl: '/pwa/offline',
    })
  }());
  