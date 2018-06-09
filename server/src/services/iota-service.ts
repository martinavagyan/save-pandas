import Base from "../api/controllers/baseController";

const IOTA = require("iota.lib.js");
const iota = new IOTA({provider: "http://node01.testnet.iotatoken.nl:16265"});
const mam = require('../../lib/mam.node.js')
const keygen = require('keygen');
const crypto = require('crypto');

/**
 * The following class is for testing purposes
 * the method 'insert' uses 'save' option of mongoose model to save an entry
 * */

export default class IotaService{
    public initialiseMamState = (iota: any): any => {
        return mam.init(iota);
    }

    public getMam = () => {
        return mam;
    }

    public getIota = () => {
        return iota;
    }

    public attachMessage = async (packet: any): Promise<void> => {
        try {
            let trytes = iota.utils.toTrytes(JSON.stringify(packet));
            let mamState = this.initialiseMamState(iota);
            console.log('mamState', mamState);
            let message = mam.create(mamState, trytes);

            // Save new mamState
            mamState = message.state;

            // Attach the payload.
            console.log('Root: ', message.root);
            console.log('Address: ', message.address);
            await mam.attach(message.payload, message.address);

            // Fetch Stream Async to Test
            return message.root;
        }
        catch (e) {
            console.log('error while publishing');
        }
    }
}

