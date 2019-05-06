import TPDU from './TPDU';
import * as Constants from '../Constants';
import Iso8583Packer from './Iso8583Protocol';


import logger from '../Logger/Logger';
//Using Destructuring - JS
let { BaseConstants } = Constants;

export default class Iso8583Data {
    
    constructor(socket) {
        this.m_Socket = socket;
        this.m_TPDU = new TPDU();
        this.m_Data = new Buffer(BaseConstants.MAX_LENGTH_BUFFER);
    }
    
    onData() {
        this.m_Socket.on('data', (data) => {
            logger.debug('recevied: ' + data + 'from ' + this.m_Socket.remoteAddress);
        });
    }
};