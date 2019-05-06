"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class TPDU {
  constructor(value = '6000000000') {
    this.rawTPDU = new Buffer(value, 'hex');
  }

  getRawTPDU() {
    return this.rawTPDU;
  }

  SetRawTPDU(value) {
    this.rawTPDU = new Buffer(value, 'hex');
  }

}

exports.default = TPDU;
;