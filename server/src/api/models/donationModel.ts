import mongoose = require('mongoose');
import {Schema, Document} from 'mongoose';

export interface IDonation {
    amount: number;
    createdAt: Date;
}

const DonationSchema: Schema = new Schema({
    amount: Number,
    createdAt: Date,
    UserId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    projectId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}],
});

export interface IDonationModel extends IDonation, Document {
}

const DonationModel = mongoose.model<IDonationModel>('Donation', DonationSchema);

export default DonationModel;
