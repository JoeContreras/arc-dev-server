const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      trim: true,
      type: String,
    },
    date: {
      required: true,
      trim: true,
      type: Date,
    },
    total: {
      required: true,
      trim: true,
      type: String,
    },
    service: {
      required: true,
      trim: true,
      type: String,
    },
    complexity: {
      required: true,
      trim: true,
      type: String,
    },
    users: {
      required: true,
      trim: true,
      type: String,
    },
    platforms: {
      required: true,
      trim: true,
      type: [String],
    },
    features: {
      required: true,
      trim: true,
      type: [String],
    },
    /*
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
*/
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
