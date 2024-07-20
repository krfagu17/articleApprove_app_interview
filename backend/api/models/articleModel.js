import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    // title: {
    //     type: String,
    //     required: true
    // },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    }
});

const articleModel = mongoose.model('Article', articleSchema);

export default articleModel;