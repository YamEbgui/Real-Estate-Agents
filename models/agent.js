const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  license_id: {
    type: Number,
    required: true,
  },
  license_date: {
    type: Date,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Agent = mongoose.model("Agent", AgentSchema);

module.exports = Agent;
