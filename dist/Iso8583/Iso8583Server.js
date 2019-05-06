"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var AppSettings = _interopRequireWildcard(require("../AppSettings"));

var _Iso8583Data = _interopRequireDefault(require("./Iso8583Data"));

var _net = _interopRequireDefault(require("net"));

var _Logger = _interopRequireDefault(require("../Logger/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let {
  DownlinkConfig
} = AppSettings;
let connections = [];

class SocketServer {
  constructor() {
    this.m_IP = DownlinkConfig.IP;
    this.m_Port = DownlinkConfig.PORT;
    this.m_LenType = DownlinkConfig.LenType;
  }

  Init() {
    this.m_Server = _net.default.createServer();
  }

  Start() {
    this.Init();
    this.m_Server.listen(this.m_Port, this.m_IP);

    _Logger.default.debug('server is listening on port: ' + this.m_Port);
  }

  onConnection() {
    this.m_Server.on('connection', socket => {
      _Logger.default.debug('client connected....' + socket.remoteAddress);

      let data = new _Iso8583Data.default(socket);
      data.onData();
    });
  }

  onData() {// this.m_Server.on('data', (data) => {
    //     logger.debug('received data: ' + data);
    // });
  }

  onClose(socket) {
    this.m_Server.on('close', () => {});
  }

}

class Iso8583Server extends SocketServer {
  constructor() {
    super();
  }

  StartServer() {
    this.Start();
    this.onConnection();
    this.onData();
    this.onClose();
  }

}

var _default = Iso8583Server;
exports.default = _default;