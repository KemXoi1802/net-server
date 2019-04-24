"use strict";

var _packager = _interopRequireDefault(require("./packager"));

var _jspos = require("jspos");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var msg = _packager["default"].createISOMsg();

msg.setMTI('0800');
msg.setField(11, '000105');
msg.setField(41, '00000764');
msg.setField(42, '111000001111002');
msg.setField(60, '00000001003');
msg.setField(63, '001');
console.log(_jspos.ISOUtil.hexString(msg.pack()));
var msgStr = '08000020000000C00012000105303030303037363431313130303030303131313130303200110000000100300003303031';

var unpackMsg = _packager["default"].createISOMsg();

unpackMsg.unpack(_jspos.ISOUtil.hex2byte(msgStr));
console.log(_jspos.ISOUtil.hexString(unpackMsg.pack()));