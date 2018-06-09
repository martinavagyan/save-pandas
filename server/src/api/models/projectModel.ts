import mongoose = require('mongoose');
import {Schema, Document} from 'mongoose';

interface Coordinate {
    x: number;
    y: number;
}

export interface IProject {
    title: string;
    description: string;
    coordinate: Coordinate;
    img: string;
    goals: [{}];
    plege: number;
    status: [{}];
    feedBack: [
        {
            name: string,
            text: string,
            createdAt: Date,
        }
    ];
    bankAccount: string;

}

const ProjectSchema: Schema = new Schema({
    title: String,
    description: String,
    coordinate: {
        x: Number,
        y: Number,
    },
    img: String,
    goals: [{}],
    plege: Number,
    status: [{}],
    feedBack: [
        {
            name: String,
            text: String,
            dateCreated: Date,
        },
    ],
    bankAccount: String,
    UserId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

export interface IProjectModel extends IProject, Document {
}

const ProjectModel = mongoose.model<IProjectModel>('Project', ProjectSchema);

export default ProjectModel;
