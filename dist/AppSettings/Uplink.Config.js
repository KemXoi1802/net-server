"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LengthType = _interopRequireDefault(require("./LengthType.Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UplinkConfig = {
  IP: '203.189.28.79',
  PORT: 5679,
  NII: 3,
  LenType: _LengthType.default.HEX
};
var _default = UplinkConfig;
exports.default = _default;