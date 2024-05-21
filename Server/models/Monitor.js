const mongoose = require("mongoose");

const MonitorSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      immutable: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    interval: {
      // in milliseconds
      type: Number,
      default: 60000,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Monitor", MonitorSchema);
