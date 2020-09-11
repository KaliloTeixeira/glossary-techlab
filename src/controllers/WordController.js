const mongoose = require('mongoose');
const { query } = require('express');

const Word = mongoose.model('Word');

module.exports = {
    async listWords(req, res) {
        const { page = 1 } = req.query;
        const words = await Word.paginate({}, { page, limit: 10 });
        // .json() envia a resposta como Estrutura de Dados (json)

        return res.json(words);
    },

    async showWord(req, res) {
        const word = await Word.findById(req.params.id);

        if (!word) return res.json("Word not found!");
        return res.json(word);
    },

    async createWord(req, res) {
        const word = await Word.create(req.body);

        return res.json(word);
    },

    async updateWord(req, res) {
        const word = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!word) return res.json("Word not found!");
        return res.json(word);
    },

    async removeWord(req, res) {
        await Word.findByIdAndRemove(req.params.id);

        if (!word) return res.json("Word not found!");
        return res.send("Word removed sucessfully!");
    },

    async searchWord(req, res) {
        // to implement
    }
};