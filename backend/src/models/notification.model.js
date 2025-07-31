import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            requires: true,
        },
        type: {
            type: String,
            required: true,
            enum: ["follow", "like", "comment"]
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: null,
        },
        comment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
            default: null,
        }
    },
    {timestamp: true}
);

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;