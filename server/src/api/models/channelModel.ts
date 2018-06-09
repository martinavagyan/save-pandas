import mongoose = require('mongoose');
import {Schema, Document} from 'mongoose';

export interface IChannel {
    root: string;
}

const ChannelSchema: Schema = new Schema({
    root: String
});

export interface IChannelModel extends IChannel, Document {
}

const ChannelModel = mongoose.model<IChannelModel>('Channel', ChannelSchema);

export default ChannelModel;
