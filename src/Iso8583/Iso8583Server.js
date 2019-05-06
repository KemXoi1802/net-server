import * as AppSettings from '../AppSettings';
import Iso8583Data from './Iso8583Data';
import net from 'net';

import logger from '../Logger/Logger';
let { DownlinkConfig } = AppSettings;
let connections = [];

class SocketServer {
    constructor() {
        this.m_IP = DownlinkConfig.IP;
        this.m_Port = DownlinkConfig.PORT;
        this.m_LenType = DownlinkConfig.LenType;
    }

    Init() {
        this.m_Server = net.createServer();
    }
    Start() {
        this.Init();
        this.m_Server.listen(this.m_Port, this.m_IP);
        logger.debug('server is listening on port: ' + this.m_Port);
    }

    onConnection() {
        this.m_Server.on('connection', (socket) => {
            logger.debug('client connected....' + socket.remoteAddress);
            let data = new Iso8583Data(socket);
            data.onData();
        });
    }

    onData() {
        // this.m_Server.on('data', (data) => {
        //     logger.debug('received data: ' + data);
        // });
    }

    onClose(socket) {
        this.m_Server.on('close', () => {

        })
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

export default Iso8583Server;