const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const WordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
    },
    meaning: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

WordSchema.plugin(mongoosePaginate);

// o .model() é utilizado para registrar um model na nossa aplicação
mongoose.model('Word', WordSchema);