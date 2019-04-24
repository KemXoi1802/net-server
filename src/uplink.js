import net from 'net';

class SocketClient {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.sockClient = new net.Socket();
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
export {
    SocketClient
}