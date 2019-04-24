"use strict";

var _packager = _interopRequireDefault(require("./packager"));

var _jspos = require("jspos");

var _uplink = require("./uplink");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sock = new _uplink.SocketClient('10.0.16.107', 5679);
let data = '007e600000000099970400000000c0000200113030312d3030322d303033313233313131333130303030303030303030303030303200730256580556783532300832303136303132360830303030303030321156696574636f6d62616e6b1156696574636f6d62616e6b094d6f626970686f6e65113139322e3136382e312e31';
sock.start();
setTimeout(() => {
  sock.init();
}, 5000);