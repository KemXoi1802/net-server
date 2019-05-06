export default class TPDU {
    constructor(value = '6000000000') {
        this.rawTPDU = new Buffer(value, 'hex');
    }

    getRawTPDU() {
        return this.rawTPDU;
    }

    SetRawTPDU(value) {
        this.rawTPDU = new Buffer(value, 'hex');
    }
};