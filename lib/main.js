var Hls = require("hls.js");
var attachVideojsStreamrootProvider = require('./videojs5-hlsjs-source-handler.js');

if (!window._phantom && !document.createElement('video').canPlayType('application/vnd.apple.mpegURL')) {
  attachVideojsStreamrootProvider(window, window.videojs, Hls);
}
