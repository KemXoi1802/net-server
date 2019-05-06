"use strict";

var _packager = _interopRequireDefault(require("./packager"));

var _jspos = require("jspos");

var _uplink = require("./uplink");

var AppSettings = _interopRequireWildcard(require("./AppSettings"));

var _TPDU = _interopRequireDefault(require("./Iso8583/TPDU"));

var _Iso8583Server = _interopRequireDefault(require("./Iso8583/Iso8583Server"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let serv = new _Iso8583Server.default();
serv.StartServer(); // let { PermanentConnectionConfig } = AppSettings;
// console.log(PermanentConnectionConfig.keys());
// console.log(Object.keys(PermanentConnectionConfig).length);
// const sock = new SocketClient('10.0.16.107', 5679);
// let data = '007e600000000099970400000000c0000200113030312d3030322d303033313233313131333130303030303030303030303030303200730256580556783532300832303136303132360830303030303030321156696574636f6d62616e6b1156696574636f6d62616e6b094d6f626970686f6e65113139322e3136382e312e31';
// sock.start();
// sock.init();