"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LenType = _interopRequireDefault(require("./LenType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = [host1 = {
  ip: '203.189.28.79',
  port: 5679,
  nii: 3,
  length_type: _LenType.default.HEX
}, host2 = {
  ip: '203.189.28.79',
  port: 5679,
  nii: 4,
  length_type: _LenType.default.BCD
}];
var _default = config;
exports.default = _default;