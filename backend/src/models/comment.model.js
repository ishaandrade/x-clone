import mongoose from "mongoose";

const commentSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
        content: {
            type: String,
            required: true,
            maxLength: 280,
        },
        image: {
            type: String,
            default: ""
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ],
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]
    },
    { timestamps: true, }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;