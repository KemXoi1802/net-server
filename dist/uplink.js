"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocketClient = void 0;

var _net = _interopRequireDefault(require("net"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SocketClient {
  constructor(host, port) {
    this.host = host;
    this.port = port;
    this.sockClient = new _net.default.Socket();
  }

  init() {
    console.log('before init properties');
    this.sockClient.on('connect', () => {
      console.log('connecting here...');
    });
    this.sockClient.on('error', () => {
      console.log('error until connect to host...');
    });
    console.log('done init properties');
  }

  start() {
    console.log('before connect');
    this.sockClient.connect(this.port, this.host);
    console.log('done connect');
  }

  async send(data) {
    await this.sockClient.write(Buffer.from(data));
  }

}

exports.SocketClient = SocketClient;