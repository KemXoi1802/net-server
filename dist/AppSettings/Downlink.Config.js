"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LengthType = _interopRequireDefault(require("./LengthType.Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let DownlinkConfig = {
  IP: '10.0.16.83',
  PORT: 5679,
  LenType: _LengthType.default.HEX
};
var _default = DownlinkConfig;
exports.default = _default;