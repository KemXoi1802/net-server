"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TPDU = _interopRequireDefault(require("./TPDU"));

var AppSettings = _interopRequireWildcard(require("../AppSettings"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Iso8583Client {
  constructor() {
    this.LengthType = AppSettings.UplinkConfig.LenType;
    this.Timeout = 30; //unit second

    this.Host = AppSettings.UplinkConfig.IP;
    this.Port = AppSettings.UplinkConfig.PORT;
  }

}

exports.default = Iso8583Client;
;