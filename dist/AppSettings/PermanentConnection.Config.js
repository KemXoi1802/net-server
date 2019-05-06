"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LengthType = _interopRequireDefault(require("./LengthType.Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Support max 9 permanent connection
 */
let PermanentConnectionConfig = {
  Connection1: {
    ip: '203.189.28.79',
    port: 5679,
    nii: 3,
    length_type: _LengthType.default.HEX
  },
  Connection2: {
    ip: '203.189.28.79',
    port: 5679,
    nii: 4,
    length_type: _LengthType.default.BCD
  },
  Connection3: {
    ip: '203.189.28.79',
    port: 5679,
    nii: 4,
    length_type: _LengthType.default.BCD
  },
  Connection4: {
    ip: '203.189.28.79',
    port: 5679,
    nii: 4,
    length_type: _LengthType.default.BCD
  },
  Connection5: {
    ip: '203.189.28.79',
    port: 5679,
    nii: 4,
    length_type: _LengthType.default.BCD
  },
  Connection6: {
    ip: '203.189.28.79',
    port: 5679,
    nii: 4,
    length_type: _LengthType.default.BCD
  },
  Connection7: {
    ip: '203.189.28.79',
    port: 5679,
    nii: 4,
    length_type: _LengthType.default.BCD
  },
  Connection8: {
    ip: '203.189.28.79',
    port: 5679,
    nii: 4,
    length_type: _LengthType.default.BCD
  },
  Connection9: {
    ip: '203.189.28.79',
    port: 5679,
    nii: 4,
    length_type: _LengthType.default.BCD
  }
};
var _default = PermanentConnectionConfig;
exports.default = _default;