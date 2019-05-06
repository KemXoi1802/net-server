import TPDU from './TPDU';
import * as AppSettings from '../AppSettings';

export default class Iso8583Client {
    constructor() {
        this.LengthType  = AppSettings.UplinkConfig.LenType;
        this.Timeout = 30; //unit second
        this.Host = AppSettings.UplinkConfig.IP;
        this.Port = AppSettings.UplinkConfig.PORT;


    }
};