const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: ''
    },
    source: {
        type: String,
        default: 'Other'
    },
    status: {
        type: String,
        enum: ['new', 'contacted', 'converted', 'lost'],
        default: 'new'
    },
    notes: {
        type: String,
        default: ''
    }
}, { timestamps: true });

module.exports = mongoose.model('Lead', LeadSchema);