"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TPDU = _interopRequireDefault(require("./TPDU"));

var Constants = _interopRequireWildcard(require("../Constants"));

var _Iso8583Protocol = _interopRequireDefault(require("./Iso8583Protocol"));

var _Logger = _interopRequireDefault(require("../Logger/Logger"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Using Destructuring - JS
let {
  BaseConstants
} = Constants;

class Iso8583Data {
  constructor(socket) {
    this.m_Socket = socket;
    this.m_TPDU = new _TPDU.default();
    this.m_Data = new Buffer(BaseConstants.MAX_LENGTH_BUFFER);
  }

  onData() {
    this.m_Socket.on('data', data => {
      _Logger.default.debug('recevied: ' + data + 'from ' + this.m_Socket.remoteAddress);
    });
  }

}

exports.default = Iso8583Data;
;