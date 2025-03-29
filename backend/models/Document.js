const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;